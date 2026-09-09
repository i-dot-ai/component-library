// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SummaryListRowProps = {
    noActions?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SummaryListRow(props: SummaryListRowProps) {
    const [local, rest] = splitProps(props, ["noActions", "class", "children"]);
    const classes = () =>
        [
            "govuk-summary-list__row",
            local.noActions ? "govuk-summary-list__row--no-actions" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
