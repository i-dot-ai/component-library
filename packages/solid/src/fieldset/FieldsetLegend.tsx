/** @jsxImportSource solid-js */

import { splitProps, Show } from "solid-js";
import type { JSX } from "solid-js";

type FieldsetLegendProps = {
    size?: "small" | "medium" | "large" | "xl";
    isPageHeading?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function FieldsetLegend(props: FieldsetLegendProps) {
    const [local, rest] = splitProps(props, ["size", "isPageHeading", "class", "children"]);
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
            <Show when={local.isPageHeading} fallback={local.children ?? ""}>
                <h1 class="govuk-fieldset__heading">{local.children ?? ""}</h1>
            </Show>
        </legend>
    );
}
