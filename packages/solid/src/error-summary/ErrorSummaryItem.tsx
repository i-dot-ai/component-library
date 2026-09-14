// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ErrorSummaryItemProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ErrorSummaryItem(props: ErrorSummaryItemProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <li>
            <a class={classes()} {...rest}>
                {local.children ?? ""}
            </a>
        </li>
    );
}
