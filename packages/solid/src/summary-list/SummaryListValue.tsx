// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SummaryListValueProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SummaryListValue(props: SummaryListValueProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-summary-list__value", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <dd class={classes()} {...rest}>
            {local.children ?? ""}
        </dd>
    );
}
