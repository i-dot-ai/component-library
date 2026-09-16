import { ReactNode } from 'react';

type ErrorSummaryProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummary({ class: className, children, ...rest }: ErrorSummaryProps) {
    const classes = ["govuk-error-summary", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} data-module="govuk-error-summary" {...rest}>
            <div role="alert">
                {children ?? ""}
            </div>
        </div>
    );
}
