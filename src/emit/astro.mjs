import { AUTOGEN_HEADER, renderTree, renderLogicTree } from "./shared.mjs";

/** @typedef {import("../parse-spec.mjs").Spec} Spec */
/** @typedef {import("../parse-spec.mjs").SpecNode} SpecNode */

/**
 * @param {Spec} spec
 * @returns {string}
 */
function renderMarkup(spec) {
    if (spec.hasLogic) {
        return renderLogicTree(spec.root, {
            classExpr: "classes",
            classAttr: "class",
            propRef: (name) => name,
            boundProps: spec.logicProps,
            restSpread: "{...rest}",
            slot: (n, pad) =>
                n.slotDefault ? `${pad}<slot>${n.slotDefault}</slot>` : `${pad}<slot />`,
            cond: (c, t, e, pad) => `${pad}{${c} ? (\n${t}\n${pad}) : (\n${e}\n${pad})}`,
        });
    }
    return renderTree(spec.root, spec.primary, {
        primaryClass: "classes",
        slot: (n, pad) =>
            n.slotDefault ? `${pad}<slot>${n.slotDefault}</slot>` : `${pad}<slot />`,
    }, false);
}

/**
 * The class-merge computed in the component frontmatter: base class + variant
 * modifiers + the consumer's own class.
 * @param {Spec} spec
 * @returns {string}
 */
function createClasses(spec) {
    const baseClass = spec.primary.attrs?.class ?? "";
    const variantProps = Object.keys(spec.variants);
    if (!variantProps.length) {
        return `const classes = ["${baseClass}", className ?? ""].filter(Boolean).join(" ");`;
    }
    const variantClassExpr = variantProps
        .map((p) => `${p} ? "${spec.variants[p]}" : ""`)
        .join(",\n    ");
    return (
        `const classes = [\n` +
        `    "${baseClass}",\n` +
        `    ${variantClassExpr},\n` +
        `    className ?? "",\n` +
        `]\n` +
        `    .filter(Boolean)\n` +
        `    .join(" ");`
    );
}

/**
 * The destructured props (with defaults) from Astro.props.
 * @param {Spec} spec
 * @returns {string}
 */
function createProps(spec) {
    return [
        ...Object.keys(spec.variants).map((p) => `${p} = false`),
        ...(spec.logicProps ?? []),
        `class: className`,
        ...(spec.hasLogic || spec.primary.rest ? ["...rest"] : []),
    ].join(", ");
}

/**
 * @param {Spec} spec
 * @param {string} _componentName   unused (Astro files are named by the driver)
 * @returns {string}
 */
export function emitAstro(spec, _componentName) {
    const classes = createClasses(spec);
    const props = createProps(spec);
    const markup = renderMarkup(spec);

    return `---
${AUTOGEN_HEADER.trimEnd()}
const { ${props} } = Astro.props;

${classes}
---

${markup}
`;
}
