// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CheckboxInputProps = {
    class?: string;
    [key: string]: unknown;
};

export default function CheckboxInput(props: CheckboxInputProps) {
    const [local, rest] = splitProps(props, ["class"]);
    const classes = () =>
        ["govuk-checkboxes__input", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <input class={classes()} type="checkbox" {...rest} />
    );
}
