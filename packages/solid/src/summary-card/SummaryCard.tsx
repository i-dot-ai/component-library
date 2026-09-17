/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SummaryCardProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SummaryCard(props: SummaryCardProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-summary-card", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
