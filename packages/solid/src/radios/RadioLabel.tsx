/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type RadioLabelProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function RadioLabel(props: RadioLabelProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-label govuk-radios__label", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <label class={classes()} {...rest}>
            {local.children ?? ""}
        </label>
    );
}
