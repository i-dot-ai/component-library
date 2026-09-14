// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CardGroupProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function CardGroup(props: CardGroupProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["iai-card-group", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
