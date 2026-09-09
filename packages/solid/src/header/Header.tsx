// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type HeaderProps = {
    href?: string;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Header(props: HeaderProps) {
    const [local, rest] = splitProps(props, ["href", "class", "children"]);
    const classes = () =>
        ["govuk-generic-header", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            <div class="govuk-generic-header__container govuk-width-container">
                <div class="govuk-generic-header__logo">
                    <a class="govuk-generic-header__homepage-link" href={local.href}>
                        {local.children ?? ""}
                    </a>
                </div>
            </div>
        </div>
    );
}
