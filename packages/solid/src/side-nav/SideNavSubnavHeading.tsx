// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SideNavSubnavHeadingProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SideNavSubnavHeading(props: SideNavSubnavHeadingProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["side-nav__section-heading", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <h3 class={classes()} {...rest}>
            {local.children ?? ""}
        </h3>
    );
}
