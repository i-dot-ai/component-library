// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SummaryListKeyProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SummaryListKey(props: SummaryListKeyProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-summary-list__key", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <dt class={classes()} {...rest}>
            {local.children ?? ""}
        </dt>
    );
}
