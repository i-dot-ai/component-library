/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type PanelActionsProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function PanelActions(props: PanelActionsProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-panel__actions", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children}
        </div>
    );
}
