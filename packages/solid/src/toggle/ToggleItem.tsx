// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ToggleItemProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ToggleItem(props: ToggleItemProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["iai-toggle__item", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} data-module="govuk-toggle" {...rest}>
            {local.children ?? ""}
        </div>
    );
}
