import { ReactNode } from 'react';

type SideNavItemProps = {
    href?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SideNavItem({ href, class: className, children, ...rest }: SideNavItemProps) {
    const classes = ["side-nav__item", className ?? ""].filter(Boolean).join(" ");

    return (
        <li className={classes} {...rest}>
            <a className="govuk-link govuk-link--no-visited-state govuk-!-font-size-16 govuk-link--no-underline" href={href}>
                {children ?? ""}
            </a>
        </li>
    );
}
