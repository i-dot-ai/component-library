// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TableHeaderProps = {
    numeric?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TableHeader(props: TableHeaderProps) {
    const [local, rest] = splitProps(props, ["numeric", "class", "children"]);
    const classes = () =>
        [
            "govuk-table__header",
            local.numeric ? "govuk-table__header--numeric" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <th class={classes()} scope="col" {...rest}>
            {local.children ?? ""}
        </th>
    );
}
