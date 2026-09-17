/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ContentsPanelSectionProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ContentsPanelSection(props: ContentsPanelSectionProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["contents-panel__section", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <ul class={classes()} {...rest}>
            {local.children}
        </ul>
    );
}
