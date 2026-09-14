// AUTO-GENERATED from HTML spec. Do not edit by hand.

type PaginationPrevProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function PaginationPrev({ class: className, children, ...rest }: PaginationPrevProps) {
    const classes = ["govuk-link govuk-pagination__link", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className="govuk-pagination__prev">
            <a className={classes} rel="prev" {...rest}>
                <svg className="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                    <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
                </svg>
                <span className="govuk-pagination__link-title">
                    {children ?? "Previous"}
                    <span className="govuk-visually-hidden">
                        page
                    </span>
                </span>
            </a>
        </div>
    );
}
