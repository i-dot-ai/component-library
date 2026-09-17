import { ReactNode } from 'react';

type SummaryCardActionProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryCardAction({ class: className, children, ...rest }: SummaryCardActionProps) {
    const classes = ["govuk-summary-card__action", className ?? ""].filter(Boolean).join(" ");

    return (
        <li className={classes} {...rest}>
            {children ?? ""}
        </li>
    );
}
