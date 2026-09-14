// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CardProps = {
    secondary?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Card(props: CardProps) {
    const [local, rest] = splitProps(props, ["secondary", "class", "children"]);
    const classes = () =>
        [
            "iai-card",
            local.secondary ? "iai-card--secondary" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
