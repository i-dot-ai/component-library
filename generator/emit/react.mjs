import { AUTOGEN_HEADER, mountInitBody, renderTree, renderLogicTree, valueVariantTerm, valueVariantUnion } from "./shared.mjs";

/** @typedef {import("../parse-spec.mjs").Spec} Spec */
/** @typedef {import("../parse-spec.mjs").SpecNode} SpecNode */

const IMPORT_STATEMENT = `import { useEffect, useRef } from "react";\n`;
const REF = `    const ref = useRef<HTMLElement>(null);\n`;

/**
 * @param {Spec} spec
 * @returns {string}
 */
function renderMarkup(spec) {
    if (spec.hasLogic) {
        return renderLogicTree(spec.root, {
            classExpr: "classes",
            classAttr: "className",
            forAttr: "htmlFor",
            propRef: (name) => name,
            classNameRef: "className ?? \"\"",
            boundProps: spec.logicProps,
            restSpread: "{...rest}",
            slot: (n, pad) => `${pad}{children ?? ${JSON.stringify(n.slotDefault ?? "")}}`,
            cond: (c, t, e, pad, isRoot) =>
                isRoot
                    ? `${pad}${c} ? (\n${t}\n${pad}) : (\n${e}\n${pad})`
                    : `${pad}{${c} ? (\n${t}\n${pad}) : (\n${e}\n${pad})}`,
        }, 2);
    }
    return renderTree(spec.root, spec.primary, {
        classAttr: "className",
        forAttr: "htmlFor",
        primaryClass: "classes",
        primaryRef: "ref={ref}",
        baseIndent: 2,
        slot: (n, pad) => `${pad}{children ?? ${JSON.stringify(n.slotDefault ?? "")}}`,
    }, Boolean(spec.init));
}

/**
 * The runtime class-merge expression: base class + variant modifiers + the
 * consumer's own className.
 * @param {Spec} spec
 * @returns {string}
 */
function createClasses(spec) {
    const baseClass = spec.primary.attrs?.class ?? "";
    const variantProps = Object.keys(spec.variants);
    const valueProps = Object.keys(spec.valueVariants ?? {});
    if (!variantProps.length && !valueProps.length) {
        return `    const classes = ["${baseClass}", className ?? ""].filter(Boolean).join(" ");\n`;
    }
    const terms = [
        ...variantProps.map((p) => `${p} ? "${spec.variants[p]}" : ""`),
        ...valueProps.map((p) => valueVariantTerm(p, spec.valueVariants[p])),
    ].join(",\n        ");
    return (
        `    const classes = [\n` +
        `        "${baseClass}",\n` +
        `        ${terms},\n` +
        `        className ?? "",\n` +
        `    ]\n` +
        `        .filter(Boolean)\n` +
        `        .join(" ");\n`
    );
}

/**
 * The destructured props in the function signature.
 * @param {Spec} spec
 * @returns {string}
 */
function createProps(spec) {
    return [
        ...Object.keys(spec.variants),
        ...Object.keys(spec.valueVariants ?? {}).map((p) =>
            spec.defaults?.[p] !== undefined ? `${p} = ${JSON.stringify(spec.defaults[p])}` : p,
        ),
        ...(spec.logicProps ?? []),
        `class: className`,
        ...(spec.hasSlot ? ["children"] : []),
        ...(spec.hasLogic || spec.primary.rest ? ["...rest"] : []),
    ].join(", ");
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
        `    class?: string;`,
        ...(spec.hasSlot ? [`    children?: React.ReactNode;`] : []),
    ].join("\n");
}

/**
 * Self-initialise the GOV.UK JS component on mount, scoped to this element:
 * the page-level initAll only sees elements present at load, so late-mounted
 * React components would otherwise never initialise. Returns the useEffect
 * block, or "" when the component has no init behaviour.
 * @param {Spec} spec
 * @returns {string}
 */
function createComponentInit(spec) {
    const { init } = spec;
    if (!init) return "";
    return (
        `    useEffect(() => {\n` +
        `        const el = ref.current;\n` +
        `        if (!el) return;\n` +
        `        // Dynamic import keeps govuk-frontend out of SSR (it touches\n` +
        `        // HTMLElement at module load, which is undefined in Node).\n` +
        mountInitBody(init, "ref.current", "        ", "// Guard double-init (govuk stamps data-<module>-init).") +
        `    }, []);\n`
    );
}

/**
 * @param {Spec} spec
 * @param {string} componentName
 * @returns {string}
 */
export function emitReact(spec, componentName) {
    const imports = spec.init ? IMPORT_STATEMENT : "";
    const ref = spec.init ? REF : "";
    // Logic components compute their class per branch (inline); the hoisted
    // `classes` const is only for the single-primary (no control-flow) case.
    const classes = spec.hasLogic ? "" : createClasses(spec);
    const propType = createPropType(spec);
    const props = createProps(spec);
    const componentInit = createComponentInit(spec);
    const markup = renderMarkup(spec);

    return `${AUTOGEN_HEADER}${imports}
type ${componentName}Props = {
${propType}
    [key: string]: unknown;
};

export default function ${componentName}({ ${props} }: ${componentName}Props) {
${ref}${classes}${componentInit}
    return (
${markup}
    );
}
`;
}
