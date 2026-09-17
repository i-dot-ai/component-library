/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TextareaProps = {
    error?: boolean;
    subtle?: boolean;
    value?: string;
    class?: string;
    [key: string]: unknown;
};

export default function Textarea(props: TextareaProps) {
    const [local, rest] = splitProps(props, ["error", "subtle", "value", "class"]);
    const classes = () =>
        [
            "govuk-textarea",
            local.error ? "govuk-textarea--error" : "",
            local.subtle ? "govuk-textarea--subtle" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <textarea class={classes()} {...rest}>{local.value ?? ""}</textarea>
    );
}
