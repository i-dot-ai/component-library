// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TableCellProps = {
    numeric?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TableCell(props: TableCellProps) {
    const [local, rest] = splitProps(props, ["numeric", "class", "children"]);
    const classes = () =>
        [
            "govuk-table__cell",
            local.numeric ? "govuk-table__cell--numeric" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <td class={classes()} {...rest}>
            {local.children ?? ""}
        </td>
    );
}
