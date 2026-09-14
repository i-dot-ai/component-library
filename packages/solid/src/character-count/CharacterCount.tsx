// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CharacterCountProps = {
    class?: string;
    [key: string]: unknown;
};

export default function CharacterCount(props: CharacterCountProps) {
    const [local, rest] = splitProps(props, ["class"]);
    const classes = () =>
        ["govuk-textarea govuk-js-character-count", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <textarea class={classes()} {...rest}></textarea>
    );
}
