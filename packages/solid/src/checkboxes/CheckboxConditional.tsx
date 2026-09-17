/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CheckboxConditionalProps = {
    hidden?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function CheckboxConditional(props: CheckboxConditionalProps) {
    const merged = { hidden: true, ...props };
    const [local, rest] = splitProps(merged, ["hidden", "class", "children"]);
    const classes = () =>
        [
            "govuk-checkboxes__conditional",
            local.hidden ? "govuk-checkboxes__conditional--hidden" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
