// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type RadioItemProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function RadioItem(props: RadioItemProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-radios__item", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
