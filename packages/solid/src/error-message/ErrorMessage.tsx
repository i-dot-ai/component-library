// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ErrorMessageProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ErrorMessage(props: ErrorMessageProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-error-message", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <p class={classes()} {...rest}>
            <span class="govuk-visually-hidden">
                Error:
            </span>
            {local.children ?? ""}
        </p>
    );
}
