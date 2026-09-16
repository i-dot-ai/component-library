import { ReactNode } from 'react';

type DetailsProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Details({ class: className, children, ...rest }: DetailsProps) {
    const classes = ["govuk-details", className ?? ""].filter(Boolean).join(" ");

    return (
        <details className={classes} {...rest}>
            {children ?? ""}
        </details>
    );
}
