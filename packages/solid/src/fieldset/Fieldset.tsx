// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type FieldsetProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Fieldset(props: FieldsetProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-fieldset", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <fieldset class={classes()} {...rest}>
            {local.children ?? ""}
        </fieldset>
    );
}
