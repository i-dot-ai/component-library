// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type PaginationItemProps = {
    current?: boolean;
    ellipsis?: string;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function PaginationItem(props: PaginationItemProps) {
    const [local, rest] = splitProps(props, ["current", "ellipsis", "class", "children"]);

    return (
        local.ellipsis ? (
        <li class="govuk-pagination__item govuk-pagination__item--ellipsis">
            {local.children ?? "⋯"}
        </li>
        ) : (
        <li class={["govuk-pagination__item", local.current ? "govuk-pagination__item--current" : ""].filter(Boolean).join(" ")}>
            <a class={["govuk-link govuk-pagination__link", local.class ?? ""].filter(Boolean).join(" ")} {...rest}>
                {local.children ?? ""}
            </a>
        </li>
        )
    );
}
