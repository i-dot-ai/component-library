import { ReactNode } from 'react';

type ErrorSummaryTitleProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryTitle({ class: className, children, ...rest }: ErrorSummaryTitleProps) {
    const classes = ["govuk-error-summary__title", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className={classes} {...rest}>
            {children ?? ""}
        </h2>
    );
}
