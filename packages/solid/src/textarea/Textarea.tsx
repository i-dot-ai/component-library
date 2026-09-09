// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TextareaProps = {
    error?: boolean;
    subtle?: boolean;
    class?: string;
    [key: string]: unknown;
};

export default function Textarea(props: TextareaProps) {
    const [local, rest] = splitProps(props, ["error", "subtle", "class"]);
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
        <textarea class={classes()} {...rest}></textarea>
    );
}
