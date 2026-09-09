import { AUTOGEN_HEADER, renderTree, renderLogicTree, valueVariantTerm } from "./shared.mjs";

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
            classNameRef: "className ?? \"\"",
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
    const valueProps = Object.keys(spec.valueVariants ?? {});
    if (!variantProps.length && !valueProps.length) {
        return `const classes = ["${baseClass}", className ?? ""].filter(Boolean).join(" ");`;
    }
    const terms = [
        ...variantProps.map((p) => `${p} ? "${spec.variants[p]}" : ""`),
        ...valueProps.map((p) => valueVariantTerm(p, spec.valueVariants[p])),
    ].join(",\n    ");
    return (
        `const classes = [\n` +
        `    "${baseClass}",\n` +
        `    ${terms},\n` +
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
        ...Object.keys(spec.valueVariants ?? {}).map((p) =>
            spec.defaults?.[p] !== undefined ? `${p} = ${JSON.stringify(spec.defaults[p])}` : p,
        ),
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
    const props = createProps(spec);
    const markup = renderMarkup(spec);

    // Logic components compute their class per branch (inline); the hoisted
    // `classes` const is only for the single-primary (no control-flow) case.
    const classesBlock = spec.hasLogic ? "" : `\n\n${createClasses(spec)}`;

    return `---
${AUTOGEN_HEADER.trimEnd()}
const { ${props} } = Astro.props;${classesBlock}
---

${markup}
`;
}
