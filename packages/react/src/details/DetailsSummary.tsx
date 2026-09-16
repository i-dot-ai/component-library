import { ReactNode } from 'react';

type DetailsSummaryProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function DetailsSummary({ class: className, children, ...rest }: DetailsSummaryProps) {
    const classes = ["govuk-details__summary", className ?? ""].filter(Boolean).join(" ");

    return (
        <summary className={classes} {...rest}>
            <span className="govuk-details__summary-text">
                {children ?? ""}
            </span>
        </summary>
    );
}
