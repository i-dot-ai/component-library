// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TableRowProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TableRow(props: TableRowProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-table__row", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <tr class={classes()} {...rest}>
            {local.children ?? ""}
        </tr>
    );
}
