// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type ServiceNavigationItemProps = {
    href?: string;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function ServiceNavigationItem(props: ServiceNavigationItemProps) {
    const [local, rest] = splitProps(props, ["href", "class", "children"]);
    const classes = () =>
        ["govuk-service-navigation__item", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <li class={classes()} {...rest}>
            <a class="govuk-service-navigation__link" href={local.href}>
                {local.children ?? ""}
            </a>
        </li>
    );
}
