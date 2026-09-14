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
    react: { pkg: "@i-dot-ai-npm/component-library-react", desc: "React components for i.AI GOV.UK (auto-generated from HTML specs).", peer: { react: ">=18", "govuk-frontend": ">=6" }, entry: "src/index.ts" },
    solid: { pkg: "@i-dot-ai-npm/component-library-solid", desc: "Solid.js components for i.AI GOV.UK (auto-generated from HTML specs).", peer: { "solid-js": ">=1.8", "govuk-frontend": ">=6" }, entry: "src/index.ts" },
    svelte: { pkg: "@i-dot-ai-npm/component-library-svelte", desc: "Svelte components for i.AI GOV.UK (auto-generated from HTML specs).", peer: { svelte: ">=5", "govuk-frontend": ">=6" }, entry: "src/index.js" },
    astro: { pkg: "@i-dot-ai-npm/component-library-astro", desc: "Astro components for i.AI GOV.UK (auto-generated from HTML specs).", peer: { astro: ">=4", "govuk-frontend": ">=6" }, entry: "src/index.js" },
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
        JSON.stringify(packageJson(framework, meta, version), null, 2) + "\n",
    );

    console.log(`${meta.pkg}@${version}: ${count} components -> packages/${framework}/src`);
}

/**
 * Build a per-package package.json. All packages share the root version and
 * ship source only (consumer bundler handles compilation).
 *
 * `repository` and `publishConfig` are required for npm trusted publishing
 * (OIDC): npm rejects an OIDC publish whose `repository.url` does not match the
 * GitHub repository, and `publishConfig` keeps the scoped package public on the
 * npm registry.
 *
 * @param {string} framework Framework key, used for the repository directory.
 * @param {{ pkg: string, desc: string, peer: Record<string,string>, entry: string }} meta
 * @param {string} version
 */
function packageJson(framework, meta, version) {
    return {
        name: meta.pkg,
        version,
        description: meta.desc,
        type: "module",
        exports: {
            ".": `./${meta.entry}`,
            "./*": "./src/*",
        },
        files: ["src"],
        peerDependencies: meta.peer,
        repository: {
            type: "git",
            url: "git+https://github.com/i-dot-ai/component-library.git",
            directory: `packages/${framework}`,
        },
        publishConfig: {
            access: "public",
            registry: "https://registry.npmjs.org",
        },
        license: "MIT",
    };
}
