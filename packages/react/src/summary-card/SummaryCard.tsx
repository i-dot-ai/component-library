import { ReactNode } from 'react';

type SummaryCardProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryCard({ class: className, children, ...rest }: SummaryCardProps) {
    const classes = ["govuk-summary-card", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
