// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type PaginationProps = {
    block?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Pagination(props: PaginationProps) {
    const [local, rest] = splitProps(props, ["block", "class", "children"]);
    const classes = () =>
        [
            "govuk-pagination",
            local.block ? "govuk-pagination--block" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <nav class={classes()} aria-label="Pagination" {...rest}>
            {local.children ?? ""}
        </nav>
    );
}
