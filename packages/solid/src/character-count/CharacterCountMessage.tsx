// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CharacterCountMessageProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function CharacterCountMessage(props: CharacterCountMessageProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-hint govuk-character-count__message", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
