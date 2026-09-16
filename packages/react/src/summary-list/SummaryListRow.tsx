import { ReactNode } from 'react';

type SummaryListRowProps = {
    noActions?: boolean;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryListRow({ noActions, class: className, children, ...rest }: SummaryListRowProps) {
    const classes = [
        "govuk-summary-list__row",
        noActions ? "govuk-summary-list__row--no-actions" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
