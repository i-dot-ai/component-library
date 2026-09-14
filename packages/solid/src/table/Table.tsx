// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TableProps = {
    smallTextUntilTablet?: boolean;
    subtle?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Table(props: TableProps) {
    const [local, rest] = splitProps(props, ["smallTextUntilTablet", "subtle", "class", "children"]);
    const classes = () =>
        [
            "govuk-table",
            local.smallTextUntilTablet ? "govuk-table--small-text-until-tablet" : "",
            local.subtle ? "govuk-table--subtle" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <table class={classes()} {...rest}>
            {local.children ?? ""}
        </table>
    );
}
