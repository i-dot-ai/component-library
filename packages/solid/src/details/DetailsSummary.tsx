// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type DetailsSummaryProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function DetailsSummary(props: DetailsSummaryProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-details__summary", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <summary class={classes()} {...rest}>
            <span class="govuk-details__summary-text">
                {local.children ?? ""}
            </span>
        </summary>
    );
}
