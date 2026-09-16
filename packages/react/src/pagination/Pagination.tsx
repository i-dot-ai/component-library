import { ReactNode } from 'react';

type PaginationProps = {
    block?: boolean;
    class?: string;
    children?: ReactNode;
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
