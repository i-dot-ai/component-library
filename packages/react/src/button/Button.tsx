import { ReactNode } from 'react';

type ButtonProps = {
    secondary?: boolean;
    warning?: boolean;
    inverse?: boolean;
    href?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Button({ secondary, warning, inverse, href, class: className, children, ...rest }: ButtonProps) {

    return (
        href ? (
            <a href={href} role="button" className={["govuk-button", secondary ? "govuk-button--secondary" : "", warning ? "govuk-button--warning" : "", inverse ? "govuk-button--inverse" : "", className ?? ""].filter(Boolean).join(" ")} {...rest}>
                {children ?? ""}
            </a>
        ) : (
            <button className={["govuk-button", secondary ? "govuk-button--secondary" : "", warning ? "govuk-button--warning" : "", inverse ? "govuk-button--inverse" : "", className ?? ""].filter(Boolean).join(" ")} data-module="govuk-button" {...rest}>
                {children ?? ""}
            </button>
        )
    );
}
