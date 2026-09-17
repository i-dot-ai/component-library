/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ContentsPanelThemeProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ContentsPanelTheme(props: ContentsPanelThemeProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["contents-panel__theme", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <h3 class={classes()} {...rest}>
            {local.children}
        </h3>
    );
}
