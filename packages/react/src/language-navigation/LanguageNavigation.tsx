import { ReactNode } from 'react';

type LanguageNavigationProps = {
    ariaLabel?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function LanguageNavigation({
    ariaLabel = "Language",
    class: className,
    children,
    ...rest
}: LanguageNavigationProps) {
    const classes = ["govuk-language-navigation", className ?? ""]
        .filter(Boolean)
        .join(" ");

    return (
        <nav className={classes} aria-label={ariaLabel} {...rest}>
            <ul className="govuk-language-navigation__list">
                {children}
            </ul>
        </nav>
    );
}
