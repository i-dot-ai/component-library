/** @jsxImportSource solid-js */

import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ButtonProps = {
    secondary?: boolean;
    tertiary?: boolean;
    warning?: boolean;
    inverse?: boolean;
    small?: boolean;
    href?: string;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Button(props: ButtonProps) {
    const [local, rest] = splitProps(props, ["secondary", "tertiary", "warning", "inverse", "small", "href", "class", "children"]);

    return (
        local.href ? (
            <a href={local.href} role="button" class={["govuk-button", local.secondary ? "govuk-button--secondary" : "", local.warning ? "govuk-button--warning" : "", local.inverse ? "govuk-button--inverse" : "", local.tertiary ? "govuk-button--tertiary" : "", local.small ? "govuk-button--small" : "", local.class ?? ""].filter(Boolean).join(" ")} {...rest}>
                {local.children ?? ""}
            </a>
        ) : (
            <button class={["govuk-button", local.secondary ? "govuk-button--secondary" : "", local.warning ? "govuk-button--warning" : "", local.inverse ? "govuk-button--inverse" : "", local.tertiary ? "govuk-button--tertiary" : "", local.small ? "govuk-button--small" : "", local.class ?? ""].filter(Boolean).join(" ")} data-module="govuk-button" {...rest}>
                {local.children ?? ""}
            </button>
        )
    );
}
