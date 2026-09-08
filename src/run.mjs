import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

import { parseSpec } from "./parse-spec.mjs";
import { pascalCase } from "./emit/shared.mjs";
import { EMITTERS } from "./emit/index.mjs";
import { HELP } from "./cli.mjs";

/** @typedef {import("./cli.mjs").CliArgs} CliArgs */

/**
 * @typedef {Object} SpecEntry
 * @property {string} file        absolute path to the .html spec
 * @property {string} component   component sub-path (dir relative to specs root)
 * @property {string} name        spec base name (without .html)
 */

/**
 * Recursively collect .html specs under a directory.
 * @param {string} dir
 * @param {string} [componentPath]
 * @returns {SpecEntry[]}
 */
export function collectSpecs(dir, componentPath = "") {
    /** @type {SpecEntry[]} */
    const out = [];
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) {
            out.push(...collectSpecs(full, componentPath ? `${componentPath}/${entry}` : entry));
        } else if (entry.endsWith(".html")) {
            out.push({ file: full, component: componentPath, name: basename(entry, ".html") });
        }
    }
    return out;
}

/**
 * Generate framework wrappers from specs.
 * @param {{ args: CliArgs, specsDir: string, outDir: string }} opts
 * @returns {void}
 */
export function run({ args, specsDir, outDir }) {
    if (args.help) {
        console.log(HELP);
        return;
    }

    const known = EMITTERS.map((e) => e.framework);
    const unknown = args.frameworks.filter((f) => !known.includes(f));
    if (unknown.length) {
        console.error(`Unknown framework(s): ${unknown.join(", ")}. Known: ${known.join(", ")}.`);
        process.exitCode = 1;
        return;
    }
    const emitters = args.frameworks.length
        ? EMITTERS.filter((e) => args.frameworks.includes(e.framework))
        : EMITTERS;

    if (!existsSync(specsDir)) {
        console.error(`No specs found at ${specsDir}.`);
        process.exitCode = 1;
        return;
    }

    const specs = collectSpecs(specsDir);
    // When emitting a single framework, write straight into <out>/<component>.
    // When emitting several, keep a per-framework folder to avoid collisions
    // (e.g. React and Solid both produce Accordion.tsx).
    const nestByFramework = emitters.length > 1;
    let count = 0;
    for (const { file, component, name } of specs) {
        const html = readFileSync(file, "utf8");
        const spec = parseSpec(html);
        const componentName = pascalCase(name);
        for (const emitter of emitters) {
            const dest = nestByFramework
                ? join(outDir, emitter.framework, component)
                : join(outDir, component);
            mkdirSync(dest, { recursive: true });
            const source = emitter.emit(spec, componentName);
            writeFileSync(join(dest, emitter.filename(name)), source);
            count++;
        }
    }
    console.log(
        `Generated ${count} wrapper files from ${specs.length} specs (${emitters.map((e) => e.framework).join(", ")}).`,
    );
    console.log(`  specs: ${specsDir}`);
    console.log(`  out:   ${outDir}`);
}
