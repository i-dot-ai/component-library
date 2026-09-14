// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type FieldsetLegendProps = {
    size?: "small" | "medium" | "large" | "xl";
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function FieldsetLegend(props: FieldsetLegendProps) {
    const [local, rest] = splitProps(props, ["size", "class", "children"]);
    const classes = () =>
        [
            "govuk-fieldset__legend",
            ({ "small": "govuk-fieldset__legend--s", "medium": "govuk-fieldset__legend--m", "large": "govuk-fieldset__legend--l", "xl": "govuk-fieldset__legend--xl" }[local.size] ?? ""),
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <legend class={classes()} {...rest}>
            {local.children ?? ""}
        </legend>
    );
}
