import { parse } from "node-html-parser";

/**
 * @typedef {Object} SpecNode
 * @property {"element"|"text"|"slot"|"cond"} type
 * @property {string} [tag]
 * @property {Record<string,string>} [attrs]    static attributes (kept verbatim)
 * @property {Record<string,string>} [variants]  per-element boolean variants (propName -> class)
 * @property {Record<string,Record<string,string>>} [valueVariants]  per-element value variants
 * @property {boolean} [rest]                   this element carries data-rest
 * @property {boolean} [primary]                this element carries data-primary
 * @property {SpecNode[]} [children]
 * @property {string} [text]                    text node content
 * @property {string} [slotDefault]             default content for a <slot>
 * @property {string} [cond]                    prop name tested (cond node)
 * @property {SpecNode} [then]                  branch when cond is truthy
 * @property {SpecNode} [otherwise]             branch when cond is falsy (optional)
 */

/**
 * @typedef {Object} Spec
 * @property {SpecNode} root
 * @property {SpecNode} primary                 element receiving merged class + rest
 * @property {Record<string,string>} variants   boolean propName -> modifier class
 * @property {Record<string,Record<string,string>>} valueVariants  propName -> { value -> modifier class }
 * @property {Record<string,string>} defaults    propName -> default value (value-variant props)
 * @property {boolean} hasSlot
 * @property {string|null} init                 govuk-frontend component to self-init, or null
 * @property {boolean} [hasLogic]               tree contains control-flow (data-if) nodes
 * @property {string[]} [logicProps]            prop names referenced by data-if
 */

/**
 * Parse an HTML spec string into a normalised node tree plus directives.
 *
 * Control flow (strict, HTL-style): an element with `data-if="prop"` becomes a
 * conditional rendered only when `prop` is truthy; an immediately-following
 * sibling with `data-else` is its else branch. `data-if` takes a bare prop name
 * only (no expressions) — computed conditions are out of scope by design.
 *
 * Variants: `data-variant:<prop>` adds a modifier class. Two forms, auto-detected:
 *   - boolean:   data-variant:small="govuk-checkboxes--small"   (prop truthy -> class)
 *   - value-map: data-variant:colour="grey:govuk-tag--grey; green:govuk-tag--green"
 *                (prop's value selects the class; a value-map is detected by the
 *                presence of ":" pairs)
 *
 * Defaults: `data-default:<prop>="value"` gives a value-variant prop a default,
 * so the prop destructures as `prop = value` and the value-map lookup applies
 * even when the consumer omits it (e.g. date-input width defaulting to 2).
 *
 * @param {string} html
 * @returns {Spec}
 */
export function parseSpec(html) {
    const doc = parse(html.trim(), {
        lowerCaseTagName: false,
        comment: false,
    });

    const rootEls = doc.childNodes.filter((n) => n.nodeType === 1);
    if (rootEls.length === 0) throw new Error("Spec has no root element");

    /** @type {Record<string,string>} */
    const variants = {};
    /** @type {Record<string,Record<string,string>>} */
    const valueVariants = {};
    /** @type {Record<string,string>} */
    const defaults = {};
    let hasSlot = false;
    /** @type {string|null} */
    let init = null;
    /** @type {SpecNode|null} */
    let primaryNode = null;
    /** @type {Set<string>} */
    const logicProps = new Set();

    /**
     * Turn a raw element node into a normalised element SpecNode (no control
     * flow handling here — that happens when assembling sibling lists).
     * @param {any} node
     * @returns {SpecNode}
     */
    function element(node) {
        const tag = node.rawTagName;

        /** @type {Record<string,string>} */
        const attrs = {};
        /** @type {Record<string,string>} per-element boolean variants */
        const elVariants = {};
        /** @type {Record<string,Record<string,string>>} per-element value variants */
        const elValueVariants = {};
        let rest = false;
        let primary = false;
        for (const [name, value] of Object.entries(node.attributes)) {
            if (name === "data-rest") {
                rest = true;
                continue;
            }
            if (name === "data-primary") {
                primary = true;
                continue;
            }
            // data-if / data-else are consumed when pairing siblings; skip here.
            if (name === "data-if" || name === "data-else") continue;
            if (name === "data-init") {
                init = /** @type {string} */ (value);
                continue;
            }
            if (name.startsWith("data-variant:")) {
                const prop = name.slice("data-variant:".length);
                const raw = /** @type {string} */ (value);
                const map = parseValueMap(raw);
                if (map) {
                    valueVariants[prop] = map;
                    elValueVariants[prop] = map;
                } else {
                    variants[prop] = raw;
                    elVariants[prop] = raw;
                }
                continue;
            }
            if (name.startsWith("data-default:")) {
                const prop = name.slice("data-default:".length);
                defaults[prop] = /** @type {string} */ (value);
                continue;
            }
            attrs[name] = /** @type {string} */ (value);
        }

        const children = assemble(node.childNodes);

        /** @type {SpecNode} */
        const el = {
            type: "element",
            tag,
            attrs,
            rest,
            primary,
            children,
            variants: elVariants,
            valueVariants: elValueVariants,
        };
        if (primary) primaryNode = el;
        return el;
    }

    /**
     * Convert one raw node into a SpecNode (element / text / slot). Returns null
     * for pure-whitespace text.
     * @param {any} node
     * @returns {SpecNode|null}
     */
    function toNode(node) {
        if (node.nodeType === 3) {
            const text = node.rawText;
            if (!text.trim()) return null;
            return { type: "text", text: text.trim() };
        }
        if (node.nodeType !== 1) return null;
        if (node.rawTagName === "slot") {
            hasSlot = true;
            const def = node.text.trim();
            return { type: "slot", slotDefault: def || undefined };
        }
        return element(node);
    }

    /**
     * Assemble a raw child-node list into SpecNodes, folding `data-if` /
     * `data-else` element pairs into `cond` nodes.
     * @param {any[]} rawNodes
     * @returns {SpecNode[]}
     */
    function assemble(rawNodes) {
        /** raw element nodes only, in order, for if/else pairing lookahead */
        const els = rawNodes.filter((n) => n.nodeType === 1);
        /** @type {SpecNode[]} */
        const out = [];

        for (let i = 0; i < rawNodes.length; i++) {
            const raw = rawNodes[i];
            if (raw.nodeType === 1 && raw.getAttribute?.("data-if") !== undefined) {
                const prop = raw.getAttribute("data-if");
                if (!prop) throw new Error(`data-if requires a prop name.`);
                logicProps.add(prop);

                const thenNode = element(raw);
                // Look for an immediately-following element sibling with data-else.
                let otherwise;
                const idx = els.indexOf(raw);
                const nextEl = els[idx + 1];
                if (nextEl && nextEl.getAttribute?.("data-else") !== undefined) {
                    otherwise = element(nextEl);
                }

                out.push({ type: "cond", cond: prop, then: thenNode, otherwise });
                continue;
            }
            // data-else elements are consumed by their matching data-if above.
            if (raw.nodeType === 1 && raw.getAttribute?.("data-else") !== undefined) {
                continue;
            }
            const n = toNode(raw);
            if (n) out.push(n);
        }
        return out;
    }

    // Assemble the top level; a data-if/data-else pair collapses to one cond root.
    const roots = assemble(doc.childNodes);
    if (roots.length !== 1) {
        throw new Error(
            `Spec must have a single root (or a single data-if/data-else pair); found ${roots.length}.`,
        );
    }
    const root = roots[0];

    const hasLogic = logicProps.size > 0;
    // The "primary" element receives the merged class + rest. With control flow
    // there is no single primary; class/rest are handled per branch element.
    if (!primaryNode) primaryNode = root.type === "element" ? root : firstElement(root);

    return {
        root,
        primary: primaryNode,
        variants,
        valueVariants,
        defaults,
        hasSlot,
        init,
        hasLogic,
        logicProps: [...logicProps],
    };
}

/**
 * Detect and parse a value-map variant. A value-map is `key:class` pairs
 * separated by `;` (e.g. "grey:govuk-tag--grey; green:govuk-tag--green").
 * Returns null when the string is a plain class (the boolean-variant form),
 * detected by the absence of a `:` — govuk class names never contain a colon.
 * @param {string} raw
 * @returns {Record<string,string>|null}
 */
function parseValueMap(raw) {
    if (!raw.includes(":")) return null;
    /** @type {Record<string,string>} */
    const map = {};
    for (const pair of raw.split(";")) {
        const t = pair.trim();
        if (!t) continue;
        const i = t.indexOf(":");
        if (i === -1) continue;
        map[t.slice(0, i).trim()] = t.slice(i + 1).trim();
    }
    return map;
}

/**
 * Find the first element node in a (possibly cond) subtree — used to source the
 * base class when the root is a conditional.
 * @param {SpecNode} n
 * @returns {SpecNode}
 */
function firstElement(n) {
    if (n.type === "element") return n;
    if (n.type === "cond") return firstElement(/** @type {SpecNode} */ (n.then));
    return n;
}
