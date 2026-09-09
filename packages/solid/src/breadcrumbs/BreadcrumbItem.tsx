// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type BreadcrumbItemProps = {
    href?: string;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function BreadcrumbItem(props: BreadcrumbItemProps) {
    const [local, rest] = splitProps(props, ["href", "class", "children"]);
    const classes = () =>
        ["govuk-breadcrumbs__list-item", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <li class={classes()} {...rest}>
            <a class="govuk-breadcrumbs__link" href={local.href}>
                {local.children ?? ""}
            </a>
        </li>
    );
}
