// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ToggleLabelProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ToggleLabel(props: ToggleLabelProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-label iai-toggle__label", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <label class={classes()} {...rest}>
            {local.children ?? ""}
        </label>
    );
}
