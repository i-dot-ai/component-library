// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type AccordionSectionSummaryProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function AccordionSectionSummary(props: AccordionSectionSummaryProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-accordion__section-summary govuk-body", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
