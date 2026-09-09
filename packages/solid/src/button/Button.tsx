// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ButtonProps = {
    secondary?: boolean;
    warning?: boolean;
    inverse?: boolean;
    href?: string;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Button(props: ButtonProps) {
    const [local, rest] = splitProps(props, ["secondary", "warning", "inverse", "href", "class", "children"]);

    return (
        local.href ? (
        <a href={local.href} role="button" class={["govuk-button", local.secondary ? "govuk-button--secondary" : "", local.warning ? "govuk-button--warning" : "", local.inverse ? "govuk-button--inverse" : "", local.class ?? ""].filter(Boolean).join(" ")} {...rest}>
            {local.children ?? ""}
        </a>
        ) : (
        <button class={["govuk-button", local.secondary ? "govuk-button--secondary" : "", local.warning ? "govuk-button--warning" : "", local.inverse ? "govuk-button--inverse" : "", local.class ?? ""].filter(Boolean).join(" ")} data-module="govuk-button" {...rest}>
            {local.children ?? ""}
        </button>
        )
    );
}
