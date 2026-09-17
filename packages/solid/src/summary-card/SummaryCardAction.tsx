/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SummaryCardActionProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SummaryCardAction(props: SummaryCardActionProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-summary-card__action", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <li class={classes()} {...rest}>
            {local.children ?? ""}
        </li>
    );
}
