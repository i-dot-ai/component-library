// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ErrorSummaryProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ErrorSummary(props: ErrorSummaryProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-error-summary", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} data-module="govuk-error-summary" {...rest}>
            <div role="alert">
                {local.children ?? ""}
            </div>
        </div>
    );
}
