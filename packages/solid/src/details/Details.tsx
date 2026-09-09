// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type DetailsProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Details(props: DetailsProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-details", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <details class={classes()} {...rest}>
            {local.children ?? ""}
        </details>
    );
}
