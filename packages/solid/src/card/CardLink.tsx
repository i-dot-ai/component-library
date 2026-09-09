// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CardLinkProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function CardLink(props: CardLinkProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["iai-card__link", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <a class={classes()} {...rest}>
            {local.children ?? ""}
        </a>
    );
}
