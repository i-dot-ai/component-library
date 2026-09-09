// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SummaryListProps = {
    noBorder?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SummaryList(props: SummaryListProps) {
    const [local, rest] = splitProps(props, ["noBorder", "class", "children"]);
    const classes = () =>
        [
            "govuk-summary-list",
            local.noBorder ? "govuk-summary-list--no-border" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <dl class={classes()} {...rest}>
            {local.children ?? ""}
        </dl>
    );
}
