// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TabsTitleProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TabsTitle(props: TabsTitleProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-tabs__title", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <h2 class={classes()} {...rest}>
            {local.children ?? ""}
        </h2>
    );
}
