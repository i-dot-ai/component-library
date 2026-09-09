// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type LinkProps = {
    noUnderline?: boolean;
    noVisitedState?: boolean;
    variant?: "warning" | "inverse";
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Link(props: LinkProps) {
    const [local, rest] = splitProps(props, ["noUnderline", "noVisitedState", "variant", "class", "children"]);
    const classes = () =>
        [
            "govuk-link",
            local.noUnderline ? "govuk-link--no-underline" : "",
            local.noVisitedState ? "govuk-link--no-visited-state" : "",
            ({ "warning": "govuk-link--warning", "inverse": "govuk-link--inverse" }[local.variant] ?? ""),
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <a class={classes()} {...rest}>
            {local.children ?? ""}
        </a>
    );
}
