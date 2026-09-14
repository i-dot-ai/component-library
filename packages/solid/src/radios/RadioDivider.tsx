// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type RadioDividerProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function RadioDivider(props: RadioDividerProps) {
    const [local] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-radios__divider", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()}>
            {local.children ?? "or"}
        </div>
    );
}
