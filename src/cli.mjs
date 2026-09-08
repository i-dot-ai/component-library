// ---------------------------------------------------------------------------
// CLI args
//   --framework <name>   emit only this framework (react|svelte|solid|astro).
//                        Repeatable / comma-separated. Defaults to all.
//   --out <dir>          output dir (default: frontend/src/components/ui)
//   --specs <dir>        override the spec source dir (advanced; e.g. local
//                        authoring). Defaults to the bundled specs.
//   --help               print usage
//
// Model: the HTML specs stay inside this package. Running the CLI generates the
// finished framework wrappers into the consumer's project; no HTML is written
// there. Generation is pinned to the installed package version, so specs and
// generator are always in lockstep.
// ---------------------------------------------------------------------------

import { join } from "node:path";

/**
 * @typedef {Object} CliArgs
 * @property {string[]} frameworks   requested frameworks (lower-cased, trimmed)
 * @property {string} [out]          output dir override
 * @property {string} [specs]        spec source dir override
 * @property {boolean} [help]        show help and exit
 */

/**
 * Parse CLI argv into a {@link CliArgs} object.
 * @param {string[]} argv   process.argv.slice(2)
 * @returns {CliArgs}
 */
export function parseArgs(argv) {
    /** @type {CliArgs} */
    const args = { frameworks: [] };
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === "--framework" || a === "-f") args.frameworks.push(...argv[++i].split(","));
        else if (a.startsWith("--framework=")) args.frameworks.push(...a.slice("--framework=".length).split(","));
        else if (a === "--out") args.out = argv[++i];
        else if (a.startsWith("--out=")) args.out = a.slice("--out=".length);
        else if (a === "--specs") args.specs = argv[++i];
        else if (a.startsWith("--specs=")) args.specs = a.slice("--specs=".length);
        else if (a === "--help" || a === "-h") args.help = true;
    }
    args.frameworks = args.frameworks.map((f) => f.trim().toLowerCase()).filter(Boolean);
    return args;
}

export const HELP = `iai-generate-components — generate GOV.UK component wrappers from HTML specs

Usage:
  iai-generate-components [--framework react] [--out <dir>] [options]

Options:
  -f, --framework <name>  Emit only this framework: react | svelte | solid | astro.
                          Repeatable or comma-separated. Default: all.
      --out <dir>         Output directory. Default: frontend/src/components/ui
      --specs <dir>       Advanced: read specs from this dir instead of the
                          bundled ones (for local authoring).
  -h, --help              Show this help.

The HTML specs live inside this package and are not copied into your project;
only the generated wrappers are written to --out.
`;

/**
 * Resolve the input (specs) and output directories from parsed args.
 * Output lands in the consumer project (current working directory). Specs
 * default to the bundled ones shipped with this package; --specs overrides
 * (advanced, e.g. local authoring in this repo).
 * @param {CliArgs} args
 * @param {string} bundledSpecsDir   absolute path to the package's bundled specs
 * @returns {{ outDir: string, specsDir: string }}
 */
export function resolvePaths(args, bundledSpecsDir) {
    const outDir = args.out
        ? join(process.cwd(), args.out)
        : join(process.cwd(), "frontend", "src", "components", "ui");

    const specsDir = args.specs
        ? join(process.cwd(), args.specs)
        : bundledSpecsDir;

    return { outDir, specsDir };
}
