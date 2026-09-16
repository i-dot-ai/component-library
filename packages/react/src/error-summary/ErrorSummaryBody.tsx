import { ReactNode } from 'react';

type ErrorSummaryBodyProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryBody({ class: className, children, ...rest }: ErrorSummaryBodyProps) {
    const classes = ["govuk-error-summary__body", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
