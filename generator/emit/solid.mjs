import { AUTOGEN_HEADER, mountInitBody, renderTree, renderLogicTree } from "./shared.mjs";

/** @typedef {import("../parse-spec.mjs").Spec} Spec */
/** @typedef {import("../parse-spec.mjs").SpecNode} SpecNode */

const IMPORT_STATEMENT = `import { splitProps, onMount } from "solid-js";\n`;
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
    const variantProps = Object.keys(spec.variants);
    if (!variantProps.length) {
        return `    const classes = () =>\n        ["${baseClass}", local.class ?? ""].filter(Boolean).join(" ");\n`;
    }
    const variantClassExpr = variantProps
        .map((p) => `local.${p} ? "${spec.variants[p]}" : ""`)
        .join(",\n            ");
    return (
        `    const classes = () =>\n` +
        `        [\n` +
        `            "${baseClass}",\n` +
        `            ${variantClassExpr},\n` +
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
        ...(spec.logicProps ?? []).map((p) => `"${p}"`),
        `"class"`,
        ...(spec.hasSlot ? [`"children"`] : []),
    ].join(", ");
    return spec.hasLogic || spec.primary.rest
        ? `    const [local, rest] = splitProps(props, [${splitKeys}]);\n`
        : `    const [local] = splitProps(props, [${splitKeys}]);\n`;
}

/**
 * The TypeScript props type body.
 * @param {Spec} spec
 * @returns {string}
 */
function createPropType(spec) {
    return [
        ...Object.keys(spec.variants).map((p) => `    ${p}?: boolean;`),
        ...(spec.logicProps ?? []).map((p) => `    ${p}?: string;`),
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
    const imports = spec.init ? IMPORT_STATEMENT : `import { splitProps } from "solid-js";\n`;
    const ref = spec.init ? REF : "";
    const classes = createClasses(spec);
    const propType = createPropType(spec);
    const split = splitPropsLine(spec);
    const componentInit = createComponentInit(spec);
    const markup = renderMarkup(spec);

    return `${AUTOGEN_HEADER}${imports}import type { JSX } from "solid-js";

type ${componentName}Props = {
${propType}
    [key: string]: unknown;
};

export default function ${componentName}(props: ${componentName}Props) {
${ref}${split}${classes}${componentInit}
    return (
${markup}
    );
}
`;
}
