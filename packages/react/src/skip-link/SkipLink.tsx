import { ReactNode } from 'react';

type SkipLinkProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SkipLink({ class: className, children, ...rest }: SkipLinkProps) {
    const classes = ["govuk-skip-link", className ?? ""].filter(Boolean).join(" ");

    return (
        <a className={classes} data-module="govuk-skip-link" {...rest}>
            {children ?? ""}
        </a>
    );
}
