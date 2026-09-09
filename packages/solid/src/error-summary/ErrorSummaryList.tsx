// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ErrorSummaryListProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ErrorSummaryList(props: ErrorSummaryListProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-list govuk-error-summary__list", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <ul class={classes()} {...rest}>
            {local.children ?? ""}
        </ul>
    );
}
