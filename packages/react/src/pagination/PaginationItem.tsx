// AUTO-GENERATED from HTML spec. Do not edit by hand.

type PaginationItemProps = {
    current?: boolean;
    ellipsis?: string;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function PaginationItem({ current, ellipsis, class: className, children, ...rest }: PaginationItemProps) {

    return (
        ellipsis ? (
        <li className="govuk-pagination__item govuk-pagination__item--ellipsis">
            {children ?? "⋯"}
        </li>
        ) : (
        <li className={["govuk-pagination__item", current ? "govuk-pagination__item--current" : ""].filter(Boolean).join(" ")}>
            <a className={["govuk-link govuk-pagination__link", className ?? ""].filter(Boolean).join(" ")} {...rest}>
                {children ?? ""}
            </a>
        </li>
        )
    );
}
