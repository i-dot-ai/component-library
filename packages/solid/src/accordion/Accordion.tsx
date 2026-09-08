// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps, onMount } from "solid-js";
import type { JSX } from "solid-js";

type AccordionProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Accordion(props: AccordionProps) {
    let el: HTMLElement | undefined;
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-accordion", local.class ?? ""].filter(Boolean).join(" ");
    onMount(() => {
        if (!el) return;
        // Dynamic import keeps govuk-frontend out of SSR.
        void import("govuk-frontend").then(({ Accordion }) => {
            if (!el) return;
            if (el.hasAttribute(`data-${Accordion.moduleName}-init`)) return;
            new Accordion(el);
        });
    });

    return (
        <div class={classes()} data-module="govuk-accordion" ref={el} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
