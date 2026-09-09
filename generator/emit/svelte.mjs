import { mountInitBody, renderTree, renderLogicTree, valueVariantTerm } from "./shared.mjs";

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
                n.slotDefault
                    ? `${pad}{#if children}{@render children()}{:else}${n.slotDefault}{/if}`
                    : `${pad}{@render children?.()}`,
            cond: (c, t, e, pad) => `${pad}{#if ${c}}\n${t}\n${pad}{:else}\n${e}\n${pad}{/if}`,
        });
    }
    return renderTree(spec.root, spec.primary, {
        primaryClass: "classes",
        primaryRef: "bind:this={node}",
        slot: (n, pad) =>
            n.slotDefault
                ? `${pad}{#if children}{@render children()}{:else}${n.slotDefault}{/if}`
                : `${pad}{@render children?.()}`,
    }, Boolean(spec.init));
}

/**
 * The reactive class-merge: base class + variant modifiers + the consumer's
 * own className, recomputed via $derived.
 * @param {Spec} spec
 * @returns {string}
 */
function createClasses(spec) {
    const baseClass = spec.primary.attrs?.class ?? "";
    const variantProps = Object.keys(spec.variants);
    const valueProps = Object.keys(spec.valueVariants ?? {});
    if (!variantProps.length && !valueProps.length) {
        return `    let classes = $derived(["${baseClass}", className].filter(Boolean).join(" "));`;
    }
    const terms = [
        ...variantProps.map((p) => `${p} ? "${spec.variants[p]}" : ""`),
        ...valueProps.map((p) => valueVariantTerm(p, spec.valueVariants[p])),
    ].join(",\n            ");
    return (
        `    let classes = $derived(\n` +
        `        [\n` +
        `            "${baseClass}",\n` +
        `            ${terms},\n` +
        `            className,\n` +
        `        ]\n` +
        `            .filter(Boolean)\n` +
        `            .join(" "),\n` +
        `    );`
    );
}

/**
 * The destructured props (with defaults) from $props().
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
        `class: className = ""`,
        ...(spec.hasSlot ? ["children"] : []),
        ...(spec.hasLogic || spec.primary.rest ? ["...rest"] : []),
    ].join(", ");
}

/**
 * Self-initialise the GOV.UK JS component on mount (Svelte onMount). Returned
 * as the leading lines of the <script> block (imports + onMount), or "".
 * @param {Spec} spec
 * @returns {string}
 */
function createComponentInit(spec) {
    const { init } = spec;
    if (!init) return "";
    return (
        `    import { onMount } from "svelte";\n` +
        `    let node;\n` +
        `    onMount(() => {\n` +
        `        // Dynamic import keeps govuk-frontend out of SSR.\n` +
        mountInitBody(init, "node", "        ") +
        `    });\n`
    );
}

/**
 * @param {Spec} spec
 * @param {string} _componentName   unused (Svelte files are named by the driver)
 * @returns {string}
 */
export function emitSvelte(spec, _componentName) {
    const classes = createClasses(spec);
    const props = createProps(spec);
    const componentInit = createComponentInit(spec);
    const markup = renderMarkup(spec);

    return `<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
${componentInit}    let { ${props} } = $props();

${classes}
</script>

${markup}
`;
}
