import { ReactNode } from 'react';

type ServiceNavigationItemProps = {
    href?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ServiceNavigationItem({ href, class: className, children, ...rest }: ServiceNavigationItemProps) {
    const classes = ["govuk-service-navigation__item", className ?? ""].filter(Boolean).join(" ");

    return (
        <li className={classes} {...rest}>
            <a className="govuk-service-navigation__link" href={href}>
                {children ?? ""}
            </a>
        </li>
    );
}
