// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type AccordionSectionContentProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function AccordionSectionContent(props: AccordionSectionContentProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-accordion__section-content", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
