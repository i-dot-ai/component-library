// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ErrorSummaryBodyProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ErrorSummaryBody(props: ErrorSummaryBodyProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-error-summary__body", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
