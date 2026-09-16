import { ReactNode } from 'react';

type SummaryListValueProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryListValue({ class: className, children, ...rest }: SummaryListValueProps) {
    const classes = ["govuk-summary-list__value", className ?? ""].filter(Boolean).join(" ");

    return (
        <dd className={classes} {...rest}>
            {children ?? ""}
        </dd>
    );
}
