import { ReactNode } from 'react';

type PaginationListProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function PaginationList({ class: className, children, ...rest }: PaginationListProps) {
    const classes = ["govuk-pagination__list", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children ?? ""}
        </ul>
    );
}
