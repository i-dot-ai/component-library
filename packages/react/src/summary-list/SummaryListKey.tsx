import { ReactNode } from 'react';

type SummaryListKeyProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SummaryListKey({ class: className, children, ...rest }: SummaryListKeyProps) {
    const classes = ["govuk-summary-list__key", className ?? ""].filter(Boolean).join(" ");

    return (
        <dt className={classes} {...rest}>
            {children ?? ""}
        </dt>
    );
}
