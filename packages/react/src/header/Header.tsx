import { ReactNode } from 'react';

type HeaderProps = {
    href?: string;
    class?: string;
    containerClasses?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Header({ href, class: className, containerClasses, children, ...rest }: HeaderProps) {
    const classes = ["govuk-generic-header", className ?? ""].filter(Boolean).join(" ");
    const container = ["govuk-generic-header__container", containerClasses || "govuk-width-container"].join(" ");

    return (
        <div className={classes} {...rest}>
            <div className={container}>
                <div className="govuk-generic-header__logo">
                    <a className="govuk-generic-header__homepage-link" href={href}>
                        {children ?? ""}
                    </a>
                </div>
            </div>
        </div>
    );
}
