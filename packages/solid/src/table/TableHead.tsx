// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TableHeadProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TableHead(props: TableHeadProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-table__head", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <thead class={classes()} {...rest}>
            {local.children ?? ""}
        </thead>
    );
}
