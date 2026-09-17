/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type PhaseBannerTextProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function PhaseBannerText(props: PhaseBannerTextProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-phase-banner__text", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <span class={classes()} {...rest}>
            {local.children ?? ""}
        </span>
    );
}
