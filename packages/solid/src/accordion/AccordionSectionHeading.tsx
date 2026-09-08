// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type AccordionSectionHeadingProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function AccordionSectionHeading(props: AccordionSectionHeadingProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-accordion__section-button", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <h2 class="govuk-accordion__section-heading">
            <span class={classes()} {...rest}>
                {local.children ?? ""}
            </span>
        </h2>
    );
}
