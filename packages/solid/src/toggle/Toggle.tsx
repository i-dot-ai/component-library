// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ToggleProps = {
    class?: string;
    [key: string]: unknown;
};

export default function Toggle(props: ToggleProps) {
    const [local, rest] = splitProps(props, ["class"]);
    const classes = () =>
        ["iai-toggle__input", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class="iai-toggle">
            <input class={classes()} type="checkbox" {...rest} />
        </div>
    );
}
