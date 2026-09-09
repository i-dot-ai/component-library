// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TableBodyProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TableBody(props: TableBodyProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-table__body", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <tbody class={classes()} {...rest}>
            {local.children ?? ""}
        </tbody>
    );
}
