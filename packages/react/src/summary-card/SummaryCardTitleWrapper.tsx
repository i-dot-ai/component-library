import { ReactNode } from 'react';

type SummaryCardTitleWrapperProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryCardTitleWrapper({ class: className, children, ...rest }: SummaryCardTitleWrapperProps) {
    const classes = ["govuk-summary-card__title-wrapper", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
