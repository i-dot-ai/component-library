import { ReactNode } from 'react';

type SummaryCardTitleProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryCardTitle({ class: className, children, ...rest }: SummaryCardTitleProps) {
    const classes = ["govuk-summary-card__title", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className={classes} {...rest}>
            {children ?? ""}
        </h2>
    );
}
