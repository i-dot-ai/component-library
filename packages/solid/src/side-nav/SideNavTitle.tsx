// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SideNavTitleProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SideNavTitle(props: SideNavTitleProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["side-nav__title", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <h2 class={classes()} {...rest}>
            {local.children ?? ""}
        </h2>
    );
}
