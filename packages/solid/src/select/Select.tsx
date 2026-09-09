// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SelectProps = {
    subtle?: boolean;
    error?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Select(props: SelectProps) {
    const [local, rest] = splitProps(props, ["subtle", "error", "class", "children"]);
    const classes = () =>
        [
            "govuk-select",
            local.subtle ? "govuk-select--subtle" : "",
            local.error ? "govuk-select--error" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <select class={classes()} {...rest}>
            {local.children ?? ""}
        </select>
    );
}
