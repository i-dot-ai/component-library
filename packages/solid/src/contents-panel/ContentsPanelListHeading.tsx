/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ContentsPanelListHeadingProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ContentsPanelListHeading(props: ContentsPanelListHeadingProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["contents-panel__list-heading", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <h3 class={classes()} {...rest}>
            {local.children}
        </h3>
    );
}
