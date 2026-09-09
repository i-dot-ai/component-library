// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SummaryListActionsProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SummaryListActions(props: SummaryListActionsProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-summary-list__actions", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <dd class={classes()} {...rest}>
            {local.children ?? ""}
        </dd>
    );
}
