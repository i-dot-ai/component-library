// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SelectOptionProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SelectOption(props: SelectOptionProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <option class={classes()} {...rest}>
            {local.children ?? ""}
        </option>
    );
}
