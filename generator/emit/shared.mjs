/** @typedef {import("../parse-spec.mjs").SpecNode} SpecNode */

/**
 * HTML void elements: self-closing, never have children or a closing tag.
 */
export const VOID_TAGS = new Set([
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
]);

/**
 * Convert a spec name (kebab/snake) to PascalCase.
 * @param {string} name
 * @returns {string}
 */
export function pascalCase(name) {
    return name
        .split(/[-_]/)
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("");
}

export const AUTOGEN_HEADER = "// AUTO-GENERATED from HTML spec. Do not edit by hand.\n";

/**
 * Build the class-array term for a value-map variant: an object lookup keyed by
 * the prop's value, e.g. `({ grey: "govuk-tag--grey", ... }[colour] ?? "")`.
 * @param {string} propRef        how to reference the prop (e.g. "colour", "local.colour")
 * @param {Record<string,string>} map   value -> class
 * @returns {string}
 */
export function valueVariantTerm(propRef, map) {
    const entries = Object.entries(map)
        .map(([value, cls]) => `${JSON.stringify(value)}: ${JSON.stringify(cls)}`)
        .join(", ");
    return `({ ${entries} }[${propRef}] ?? "")`;
}

/**
 * Build an inline class-merge expression for a single control-flow branch
 * element, from *that element's* base class + its own variants + the consumer
 * className. Unlike the hoisted `classes` const (used when there is no control
 * flow), each data-if branch computes its class independently so divergent base
 * classes (e.g. `<ol class="govuk-list govuk-list--number">` vs `<ul
 * class="govuk-list">`) and branch-specific modifiers don't leak across
 * branches.
 *
 * @param {import("../parse-spec.mjs").SpecNode} node   the branch element
 * @param {Object} opts
 * @param {(name: string) => string} opts.propRef   how to reference a prop
 * @param {string} opts.classNameRef                expression for the consumer class (e.g. `className ?? ""`, `local.class ?? ""`, `className`)
 * @returns {string}                                a single JS expression evaluating to the class string
 */
export function branchClass(node, { propRef, classNameRef }) {
    const baseClass = node.attrs?.class ?? "";
    const variants = node.variants ?? {};
    const valueVariants = node.valueVariants ?? {};
    const terms = [
        JSON.stringify(baseClass),
        ...Object.keys(variants).map((p) => `${propRef(p)} ? ${JSON.stringify(variants[p])} : ""`),
        ...Object.keys(valueVariants).map((p) => valueVariantTerm(propRef(p), valueVariants[p])),
        classNameRef,
    ].join(", ");
    return `[${terms}].filter(Boolean).join(" ")`;
}

/**
 * TypeScript union of a value-map's keys, e.g. `"grey" | "green"`.
 * @param {Record<string,string>} map
 * @returns {string}
 */
export function valueVariantUnion(map) {
    return Object.keys(map).map((k) => JSON.stringify(k)).join(" | ");
}


/**
 * Serialise a static attributes object to a JSX/HTML attribute string,
 * applying per-framework name remapping (for -> htmlFor in React).
 * The `class` attribute is handled separately (merged with the consumer prop).
 * @param {Record<string,string>} attrs
 * @param {{ forAttr: string }} opts
 * @returns {string}
 */
export function renderAttrs(attrs, { forAttr }) {
    return Object.entries(attrs)
        .filter(([k]) => k !== "class") // class handled separately (merged with prop)
        .map(([k, v]) => {
            let name = k;
            if (k === "for") name = forAttr;
            return `${name}="${v}"`;
        })
        .join(" ");
}

/**
 * A framework's markup dialect: the handful of tokens that differ when
 * rendering the element tree. Everything else is identical across frameworks.
 * Optional fields fall back to plain-HTML defaults, so a dialect only lists
 * what it actually changes.
 *
 * @typedef {Object} Dialect
 * @property {string} primaryClass    class expression on the primary element (classes | classes())
 * @property {(n: SpecNode, pad: string) => string} slot   render a <slot> node
 * @property {string} [classAttr]     class attribute name. Default "class" (React: "className")
 * @property {string} [forAttr]       for/label attribute name. Default "for" (React: "htmlFor")
 * @property {string} [primaryRef]    ref binding on the primary element when init is set. Default "" (none)
 * @property {number} [baseIndent]    indent level of the root element. Default 0 (React/Solid: 2)
 */

/**
 * Render a spec node tree to framework markup. The primary element receives the
 * merged class expression, the ref binding, and the spread rest; every other
 * element keeps its verbatim tag, class and static attributes.
 * @param {SpecNode} root
 * @param {SpecNode} primary
 * @param {Dialect} dialect
 * @param {boolean} hasInit   whether the component self-initialises (adds primaryRef)
 * @returns {string}
 */
export function renderTree(root, primary, dialect, hasInit) {
    const classAttr = dialect.classAttr ?? "class";
    const forAttr = dialect.forAttr ?? "for";
    const primaryRef = dialect.primaryRef ?? "";
    const baseIndent = dialect.baseIndent ?? 0;

    /**
     * @param {SpecNode} n
     * @param {number} indent
     * @returns {string}
     */
    function node(n, indent) {
        const pad = "    ".repeat(indent);
        if (n.type === "text") return `${pad}${n.text}`;
        if (n.type === "slot") return dialect.slot(n, pad);

        const isPrimary = n === primary;
        const staticAttrs = renderAttrs(n.attrs ?? {}, { forAttr });
        const baseClass = n.attrs?.class ?? "";

        /** @type {string[]} */
        const parts = [];
        if (isPrimary) parts.push(`${classAttr}={${dialect.primaryClass}}`);
        else if (baseClass) parts.push(`${classAttr}="${baseClass}"`);
        if (staticAttrs) parts.push(staticAttrs);
        if (isPrimary && hasInit && primaryRef) parts.push(primaryRef);
        if (isPrimary && n.rest) parts.push("{...rest}");

        const attrStr = parts.length ? " " + parts.join(" ") : "";
        if (VOID_TAGS.has(n.tag ?? "")) return `${pad}<${n.tag}${attrStr} />`;
        const kids = (n.children ?? []).map((c) => node(c, indent + 1));
        if (kids.length === 0) return `${pad}<${n.tag}${attrStr}></${n.tag}>`;
        return `${pad}<${n.tag}${attrStr}>\n${kids.join("\n")}\n${pad}</${n.tag}>`;
    }

    return node(root, baseIndent);
}

/**
 * Body of the govuk-frontend self-init: dynamically import the component (which
 * keeps it out of SSR, where it touches HTMLElement at module load) and, guarding
 * against a null ref and govuk's own double-init stamp, construct it.
 *
 * The caller wraps this in the framework's mount hook (useEffect / onMount) and
 * supplies how to reference the mounted element. Returns the lines indented by
 * `pad`, without the wrapping hook.
 * @param {string} init   govuk-frontend component class name
 * @param {string} ref    expression for the element (e.g. "el", "node", "ref.current")
 * @param {string} pad    leading indentation for each line
 * @param {string} [guardComment]   optional comment line above the double-init guard
 * @returns {string}
 */
export function mountInitBody(init, ref, pad, guardComment) {
    const guard = guardComment ? `${pad}    ${guardComment}\n` : "";
    return (
        `${pad}void import("govuk-frontend").then(({ ${init} }) => {\n` +
        `${pad}    if (!${ref}) return;\n` +
        guard +
        `${pad}    if (${ref}.hasAttribute(\`data-\${${init}.moduleName}-init\`)) return;\n` +
        `${pad}    new ${init}(${ref});\n` +
        `${pad}});\n`
    );
}

/** @typedef {import("../parse-spec.mjs").SpecNode} LogicNode */

/**
 * A dialect for rendering a spec tree that contains control-flow (data-if)
 * nodes. Such trees have branch elements that each carry `class` (merged with
 * variants) and optionally `data-rest`, so — unlike {@link renderTree} — there
 * is no single implicit "primary element".
 *
 * @typedef {Object} LogicDialect
 * @property {string} classExpr          merged-class expression (e.g. "classes", "classes()")
 * @property {string} classAttr          class attribute name ("class" | "className")
 * @property {(name: string) => string} propRef   how to reference prop `name` (condition)
 * @property {string} classNameRef       expression for the consumer class in a branch (e.g. `className ?? ""`)
 * @property {string} restSpread         the rest-spread token ("{...rest}")
 * @property {(n: LogicNode, pad: string) => string} slot   render a slot node
 * @property {(condStr: string, thenStr: string, elseStr: string, pad: string, isRoot: boolean) => string} cond   render a conditional (isRoot: at the tree root, e.g. a return position)
 * @property {string} [forAttr]          for/label attribute name. Default "for"
 * @property {string[]} [boundProps]     prop names that, when written as a valueless attr, bind to the prop
 */

/**
 * Render a spec tree that may contain control-flow (data-if) nodes to framework
 * markup. Branch elements get the merged class expression on their `class`
 * attribute and `{...rest}` where `data-rest` was set. A valueless attribute
 * whose name is a bound prop (e.g. `href` on `<a href>`) binds that prop.
 * @param {LogicNode} root
 * @param {LogicDialect} d
 * @param {number} [baseIndent]
 * @returns {string}
 */
export function renderLogicTree(root, d, baseIndent = 0) {
    const forAttr = d.forAttr ?? "for";
    const boundProps = new Set(d.boundProps ?? []);

    /**
     * @param {LogicNode} n
     * @param {number} indent
     * @returns {string}
     */
    function node(n, indent) {
        const pad = "    ".repeat(indent);
        if (n.type === "text") return `${pad}${n.text}`;
        if (n.type === "slot") return d.slot(n, pad);
        if (n.type === "cond") {
            const condStr = d.propRef(/** @type {string} */ (n.cond));
            const thenStr = node(/** @type {LogicNode} */ (n.then), indent);
            const elseStr = n.otherwise
                ? node(/** @type {LogicNode} */ (n.otherwise), indent)
                : "";
            return d.cond(condStr, thenStr, elseStr, pad, indent === baseIndent);
        }

        /** @type {string[]} */
        const parts = [];
        // A branch-root element merges the consumer class + variants (it carries
        // data-rest and/or variants); nested static elements keep their class
        // verbatim, exactly as in renderTree.
        const mergesClass =
            n.rest ||
            Object.keys(n.variants ?? {}).length > 0 ||
            Object.keys(n.valueVariants ?? {}).length > 0;
        for (const [k, v] of Object.entries(n.attrs ?? {})) {
            if (k === "class") {
                if (mergesClass) {
                    // Each branch computes its own class from its own base class
                    // + variants, so divergent branches don't share modifiers.
                    const expr = branchClass(n, {
                        propRef: d.propRef,
                        classNameRef: d.classNameRef,
                    });
                    parts.push(`${d.classAttr}={${expr}}`);
                } else {
                    parts.push(`${d.classAttr}="${v}"`);
                }
                continue;
            }
            if (v === "" && boundProps.has(k)) {
                // valueless attr naming a prop => bind the prop
                parts.push(`${k}={${d.propRef(k)}}`);
                continue;
            }
            const name = k === "for" ? forAttr : k;
            parts.push(`${name}="${v}"`);
        }
        if (n.rest) parts.push(d.restSpread);

        const attrStr = parts.length ? " " + parts.join(" ") : "";
        if (VOID_TAGS.has(n.tag ?? "")) return `${pad}<${n.tag}${attrStr} />`;
        const kids = (n.children ?? []).map((c) => node(c, indent + 1));
        if (kids.length === 0) return `${pad}<${n.tag}${attrStr}></${n.tag}>`;
        return `${pad}<${n.tag}${attrStr}>\n${kids.join("\n")}\n${pad}</${n.tag}>`;
    }

    return node(root, baseIndent);
}
