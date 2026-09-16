import { ReactNode } from 'react';

type ButtonProps = {
    secondary?: boolean;
    tertiary?: boolean;
    warning?: boolean;
    inverse?: boolean;
    small?: boolean;
    href?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Button({ secondary, tertiary, warning, inverse, small, href, class: className, children, ...rest }: ButtonProps) {

    return (
        href ? (
            <a href={href} role="button" className={["govuk-button", secondary ? "govuk-button--secondary" : "", warning ? "govuk-button--warning" : "", inverse ? "govuk-button--inverse" : "", tertiary ? "govuk-button--tertiary" : "", small ? "govuk-button--small" : "", className ?? ""].filter(Boolean).join(" ")} {...rest}>
                {children ?? ""}
            </a>
        ) : (
            <button className={["govuk-button", secondary ? "govuk-button--secondary" : "", warning ? "govuk-button--warning" : "", inverse ? "govuk-button--inverse" : "", tertiary ? "govuk-button--tertiary" : "", small ? "govuk-button--small" : "", className ?? ""].filter(Boolean).join(" ")} data-module="govuk-button" {...rest}>
                {children ?? ""}
            </button>
        )
    );
}
