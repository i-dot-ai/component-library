// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TabProps = {
    selected?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Tab(props: TabProps) {
    const [local, rest] = splitProps(props, ["selected", "class", "children"]);
    const classes = () =>
        ["govuk-tabs__tab", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <li class={["govuk-tabs__list-item", local.selected ? "govuk-tabs__list-item--selected" : ""].filter(Boolean).join(" ")}>
            <a class={classes()} {...rest}>
                {local.children ?? ""}
            </a>
        </li>
    );
}
