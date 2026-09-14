// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type RadioInputProps = {
    class?: string;
    [key: string]: unknown;
};

export default function RadioInput(props: RadioInputProps) {
    const [local, rest] = splitProps(props, ["class"]);
    const classes = () =>
        ["govuk-radios__input", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <input class={classes()} type="radio" {...rest} />
    );
}
