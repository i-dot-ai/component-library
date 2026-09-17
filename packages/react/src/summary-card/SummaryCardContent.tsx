import { ReactNode } from 'react';

type SummaryCardContentProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryCardContent({ class: className, children, ...rest }: SummaryCardContentProps) {
    const classes = ["govuk-summary-card__content", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
