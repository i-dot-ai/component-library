import { ReactNode } from 'react';

type SummaryListActionsProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryListActions({ class: className, children, ...rest }: SummaryListActionsProps) {
    const classes = ["govuk-summary-list__actions", className ?? ""].filter(Boolean).join(" ");

    return (
        <dd className={classes} {...rest}>
            {children ?? ""}
        </dd>
    );
}
