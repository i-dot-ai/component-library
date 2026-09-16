import { ReactNode } from 'react';

type ErrorSummaryListProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryList({ class: className, children, ...rest }: ErrorSummaryListProps) {
    const classes = ["govuk-list govuk-error-summary__list", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children ?? ""}
        </ul>
    );
}
