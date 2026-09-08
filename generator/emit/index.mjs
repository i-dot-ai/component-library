import { pascalCase } from "./shared.mjs";
import { emitReact } from "./react.mjs";
import { emitSolid } from "./solid.mjs";
import { emitSvelte } from "./svelte.mjs";
import { emitAstro } from "./astro.mjs";

/** @typedef {import("../parse-spec.mjs").Spec} Spec */

/**
 * @typedef {Object} Emitter
 * @property {string} framework
 * @property {string} ext
 * @property {(spec: Spec, componentName: string) => string} emit
 * @property {(name: string) => string} filename
 */

/** @type {Emitter[]} */
export const EMITTERS = [
    { framework: "react", ext: "tsx", emit: emitReact, filename: (n) => `${pascalCase(n)}.tsx` },
    { framework: "solid", ext: "tsx", emit: emitSolid, filename: (n) => `${pascalCase(n)}.tsx` },
    { framework: "svelte", ext: "svelte", emit: emitSvelte, filename: (n) => `${pascalCase(n)}.svelte` },
    { framework: "astro", ext: "astro", emit: emitAstro, filename: (n) => `${n}.astro` },
];
