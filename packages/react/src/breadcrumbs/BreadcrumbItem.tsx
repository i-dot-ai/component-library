import { ReactNode } from 'react';

type BreadcrumbItemProps = {
    href?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function BreadcrumbItem({ href, class: className, children, ...rest }: BreadcrumbItemProps) {
    const classes = ["govuk-breadcrumbs__list-item", className ?? ""].filter(Boolean).join(" ");

    if (href === undefined) {
        return (
            <li className={classes} aria-current="page" {...rest}>
                {children ?? ""}
            </li>
        );
    }

    return (
        <li className={classes} {...rest}>
            <a className="govuk-breadcrumbs__link" href={href}>
                {children ?? ""}
            </a>
        </li>
    );
}
