// Monorepo generation entry.
//
// Reads the HTML specs (specs/), emits each framework's wrappers into its own
// package (packages/<framework>/src) with a barrel entry, and stamps a
// per-package package.json whose version mirrors the root package.json — so a
// single root version bump keeps all published packages in lockstep.

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { generateFramework } from "./run.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SPECS_DIR = join(ROOT, "specs");

/** Shared version for every published package, sourced from the root. */
const { version } = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));

/**
 * Per-framework packaging: npm name, framework peer dependency, and the
 * package entry file (barrel) generated alongside the components.
 */
const FRAMEWORKS = {
    react: { pkg: "@iai/react", peer: { react: ">=18" }, entry: "src/index.ts" },
    solid: { pkg: "@iai/solid", peer: { "solid-js": ">=1.8" }, entry: "src/index.ts" },
    svelte: { pkg: "@iai/svelte", peer: { svelte: ">=5" }, entry: "src/index.js" },
    astro: { pkg: "@iai/astro", peer: { astro: ">=4" }, entry: "src/index.js" },
};

for (const [framework, meta] of Object.entries(FRAMEWORKS)) {
    const pkgDir = join(ROOT, "packages", framework);
    const srcDir = join(pkgDir, "src");

    // Clean the generated src so removed components don't linger.
    if (existsSync(srcDir)) rmSync(srcDir, { recursive: true, force: true });
    mkdirSync(srcDir, { recursive: true });

    const { count } = generateFramework({ framework, specsDir: SPECS_DIR, outDir: srcDir });

    writeFileSync(
        join(pkgDir, "package.json"),
        JSON.stringify(packageJson(meta, version), null, 2) + "\n",
    );

    console.log(`${meta.pkg}@${version}: ${count} components -> packages/${framework}/src`);
}

/**
 * Build a per-package package.json. All packages share the root version and
 * ship source only (consumer bundler handles compilation).
 * @param {{ pkg: string, peer: Record<string,string>, entry: string }} meta
 * @param {string} version
 */
function packageJson(meta, version) {
    return {
        name: meta.pkg,
        version,
        description: "i.AI GOV.UK component wrappers (auto-generated from HTML specs).",
        type: "module",
        exports: {
            ".": `./${meta.entry}`,
            "./*": "./src/*",
        },
        files: ["src"],
        peerDependencies: meta.peer,
        license: "MIT",
    };
}
