import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

import { parseSpec } from "./parse-spec.mjs";
import { pascalCase } from "./emit/shared.mjs";
import { EMITTERS } from "./emit/index.mjs";

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
 * Generate one framework's wrappers from specs into a flat `<outDir>/<component>`
 * tree, plus a barrel `index.ts` re-exporting every component.
 * @param {{ framework: string, specsDir: string, outDir: string }} opts
 * @returns {{ count: number }}
 */
export function generateFramework({ framework, specsDir, outDir }) {
    const emitter = EMITTERS.find((e) => e.framework === framework);
    if (!emitter) {
        throw new Error(`Unknown framework "${framework}". Known: ${EMITTERS.map((e) => e.framework).join(", ")}.`);
    }
    if (!existsSync(specsDir)) {
        throw new Error(`No specs found at ${specsDir}.`);
    }

    const specs = collectSpecs(specsDir);
    /** @type {{ name: string, componentName: string, importPath: string }[]} */
    const exports = [];

    for (const { file, component, name } of specs) {
        const html = readFileSync(file, "utf8");
        const spec = parseSpec(html);
        const componentName = pascalCase(name);
        const dest = join(outDir, component);
        mkdirSync(dest, { recursive: true });
        const filename = emitter.filename(name);
        writeFileSync(join(dest, filename), emitter.emit(spec, componentName));
        exports.push({
            name,
            componentName,
            importPath: `./${component ? `${component}/` : ""}${filename}`,
        });
    }

    writeBarrel(framework, outDir, exports);
    return { count: specs.length };
}

/**
 * Write the package entry that re-exports every generated component.
 * @param {string} framework
 * @param {string} outDir
 * @param {{ componentName: string, importPath: string }[]} exports
 * @returns {void}
 */
function writeBarrel(framework, outDir, exports) {
    const header = "// AUTO-GENERATED barrel. Do not edit by hand.\n";
    if (framework === "svelte" || framework === "astro") {
        // Non-TS single-file components: re-export the default from each file.
        const lines = exports.map(
            (e) => `export { default as ${e.componentName} } from "${e.importPath}";`,
        );
        writeFileSync(join(outDir, "index.js"), header + lines.join("\n") + "\n");
        return;
    }
    // React / Solid: strip the extension for TS module resolution.
    const lines = exports.map((e) => {
        const path = e.importPath.replace(/\.tsx?$/, "");
        return `export { default as ${e.componentName} } from "${path}";`;
    });
    writeFileSync(join(outDir, "index.ts"), header + lines.join("\n") + "\n");
}
