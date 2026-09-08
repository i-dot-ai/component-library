#!/usr/bin/env node
/**
 * Component wrapper generator (CLI entry point).
 *
 * Reads HTML spec files (the single source of truth) that ship inside this
 * package at
 *   <package>/component-html/<component>/<name>.html
 * and emits framework wrappers for Astro, React, Svelte and Solid into the
 * consumer project at
 *   <cwd>/frontend/src/components/ui/<framework>/<component>/<Name>.<ext>
 *
 * The HTML file describes the exact markup. A few `data-*` directives declare
 * behaviour that plain HTML can't express:
 *
 *   data-variant:<prop>="<class>"   boolean prop -> modifier class
 *   data-rest                       spread remaining props/attributes here
 *   <slot></slot>                   children/slot position (inner text = default)
 *
 * Everything else (tags, static attributes like data-module / type="radio",
 * nesting) is taken verbatim from the HTML, so multi-element components
 * (e.g. phase-banner: div > p > slot) need no special handling.
 *
 * Implementation is split across src/:
 *   src/cli.mjs         argument parsing + path resolution
 *   src/parse-spec.mjs  HTML spec -> normalised Spec tree
 *   src/emit/*.mjs      per-framework emitters + registry
 *   src/run.mjs         orchestration (collect specs, emit, write files)
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { parseArgs, resolvePaths } from "./cli.mjs";
import { run } from "./run.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// The HTML specs are the single source of truth and ship bundled with this
// package (in component-html/, at the package root).
const BUNDLED_SPECS_DIR = join(__dirname, "..", "component-html");

const args = parseArgs(process.argv.slice(2));
const { outDir, specsDir } = resolvePaths(args, BUNDLED_SPECS_DIR);

run({ args, specsDir, outDir });
