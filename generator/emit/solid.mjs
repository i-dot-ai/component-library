import { AUTOGEN_HEADER, mountInitBody, renderTree, renderLogicTree, valueVariantTerm, valueVariantUnion } from "./shared.mjs";

/** @typedef {import("../parse-spec.mjs").Spec} Spec */
/** @typedef {import("../parse-spec.mjs").SpecNode} SpecNode */

const REF = `    let el: HTMLElement | undefined;\n`;

/**
 * @param {Spec} spec
 * @returns {string}
 */
function renderMarkup(spec) {
    if (spec.hasLogic) {
        return renderLogicTree(spec.root, {
            classExpr: "classes()",
            classAttr: "class",
            propRef: (name) => `local.${name}`,
            classNameRef: "local.class ?? \"\"",
            boundProps: spec.logicProps,
            restSpread: "{...rest}",
            slot: (n, pad) => `${pad}{local.children ?? ${JSON.stringify(n.slotDefault ?? "")}}`,
            cond: (c, t, e, pad, isRoot) =>
                isRoot
                    ? `${pad}${c} ? (\n${t}\n${pad}) : (\n${e}\n${pad})`
                    : `${pad}{${c} ? (\n${t}\n${pad}) : (\n${e}\n${pad})}`,
        }, 2);
    }
    return renderTree(spec.root, spec.primary, {
        primaryClass: "classes()",
        primaryRef: "ref={el}",
        baseIndent: 2,
        propRef: (name) => `local.${name}`,
        slot: (n, pad) => `${pad}{local.children ?? ${JSON.stringify(n.slotDefault ?? "")}}`,
    }, Boolean(spec.init));
}

/**
 * The runtime class-merge accessor: base class + variant modifiers + the
 * consumer's own class, read off the `local` props from splitProps.
 * @param {Spec} spec
 * @returns {string}
 */
function createClasses(spec) {
    const baseClass = spec.primary.attrs?.class ?? "";
    const variants = spec.primary.variants ?? {};
    const valueVariants = spec.primary.valueVariants ?? {};
    const variantProps = Object.keys(variants);
    const valueProps = Object.keys(valueVariants);
    if (!variantProps.length && !valueProps.length) {
        return `    const classes = () =>\n        ["${baseClass}", local.class ?? ""].filter(Boolean).join(" ");\n`;
    }
    const terms = [
        ...variantProps.map((p) => `local.${p} ? "${variants[p]}" : ""`),
        ...valueProps.map((p) => valueVariantTerm(`local.${p}`, valueVariants[p])),
    ].join(",\n            ");
    return (
        `    const classes = () =>\n` +
        `        [\n` +
        `            "${baseClass}",\n` +
        `            ${terms},\n` +
        `            local.class ?? "",\n` +
        `        ]\n` +
        `            .filter(Boolean)\n` +
        `            .join(" ");\n`
    );
}

/**
 * The splitProps call separating known props (local) from the spread rest.
 * @param {Spec} spec
 * @returns {string}
 */
function splitPropsLine(spec) {
    const splitKeys = [
        ...Object.keys(spec.variants).map((p) => `"${p}"`),
        ...Object.keys(spec.valueVariants ?? {}).map((p) => `"${p}"`),
        ...(spec.logicProps ?? []).map((p) => `"${p}"`),
        ...(spec.bindProps ?? []).map((p) => `"${p}"`),
        `"class"`,
        ...(spec.hasSlot ? [`"children"`] : []),
    ].join(", ");
    const source = hasDefaults(spec) ? "merged" : "props";
    return spec.hasLogic || spec.primary.rest
        ? `    const [local, rest] = splitProps(${source}, [${splitKeys}]);\n`
        : `    const [local] = splitProps(${source}, [${splitKeys}]);\n`;
}

/**
 * Whether any value-variant prop declares a default.
 * @param {Spec} spec
 * @returns {boolean}
 */
function hasDefaults(spec) {
    return Object.keys(spec.defaults ?? {}).length > 0;
}

/**
 * A `mergeProps` line applying value-variant defaults, or "" when there are
 * none. Solid props are reactive, so defaults are merged (not destructured).
 * @param {Spec} spec
 * @returns {string}
 */
function mergePropsLine(spec) {
    if (!hasDefaults(spec)) return "";
    const entries = Object.entries(spec.defaults)
        .map(([p, v]) => `${p}: ${JSON.stringify(v)}`)
        .join(", ");
    return `    const merged = mergeProps({ ${entries} }, props);\n`;
}

/**
 * The TypeScript props type body.
 * @param {Spec} spec
 * @returns {string}
 */
function createPropType(spec) {
    return [
        ...Object.keys(spec.variants).map((p) => `    ${p}?: boolean;`),
        ...Object.entries(spec.valueVariants ?? {}).map(
            ([p, map]) => `    ${p}?: ${valueVariantUnion(map)};`,
        ),
        ...(spec.logicProps ?? []).map((p) => `    ${p}?: string;`),
        ...(spec.bindProps ?? []).map((p) => `    ${p}?: string;`),
        `    class?: string;`,
        ...(spec.hasSlot ? [`    children?: JSX.Element;`] : []),
    ].join("\n");
}

/**
 * Self-initialise the GOV.UK JS component on mount (Solid onMount). Returns the
 * onMount block, or "" when the component has no init behaviour.
 * @param {Spec} spec
 * @returns {string}
 */
function createComponentInit(spec) {
    const { init } = spec;
    if (!init) return "";
    return (
        `    onMount(() => {\n` +
        `        if (!el) return;\n` +
        `        // Dynamic import keeps govuk-frontend out of SSR.\n` +
        mountInitBody(init, "el", "        ") +
        `    });\n`
    );
}

/**
 * @param {Spec} spec
 * @param {string} componentName
 * @returns {string}
 */
export function emitSolid(spec, componentName) {
    const imports = solidImports(spec);
    const ref = spec.init ? REF : "";
    const classes = spec.hasLogic ? "" : createClasses(spec);
    const propType = createPropType(spec);
    const merge = mergePropsLine(spec);
    const split = splitPropsLine(spec);
    const componentInit = createComponentInit(spec);
    const markup = renderMarkup(spec);
    return `${AUTOGEN_HEADER}${imports}import type { JSX } from "solid-js";

type ${componentName}Props = {
${propType}
    [key: string]: unknown;
};

export default function ${componentName}(props: ${componentName}Props) {
${ref}${merge}${split}${classes}${componentInit}
    return (
${markup}
    );
}
`;
}

/**
 * The solid-js import line, pulling in only the helpers this component uses.
 * @param {Spec} spec
 * @returns {string}
 */
function solidImports(spec) {
    const names = ["splitProps"];
    if (spec.init) names.push("onMount");
    if (hasDefaults(spec)) names.push("mergeProps");
    return `import { ${names.join(", ")} } from "solid-js";\n`;
}
