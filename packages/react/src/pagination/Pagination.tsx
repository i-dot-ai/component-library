// AUTO-GENERATED from HTML spec. Do not edit by hand.

type PaginationProps = {
    block?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Pagination({ block, class: className, children, ...rest }: PaginationProps) {
    const classes = [
        "govuk-pagination",
        block ? "govuk-pagination--block" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <nav className={classes} aria-label="Pagination" {...rest}>
            {children ?? ""}
        </nav>
    );
}
