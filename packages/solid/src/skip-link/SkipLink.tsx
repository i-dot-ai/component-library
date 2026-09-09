// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type SkipLinkProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function SkipLink(props: SkipLinkProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-skip-link", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <a class={classes()} data-module="govuk-skip-link" {...rest}>
            {local.children ?? ""}
        </a>
    );
}
