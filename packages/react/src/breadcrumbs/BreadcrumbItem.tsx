// AUTO-GENERATED from HTML spec. Do not edit by hand.

type BreadcrumbItemProps = {
    href?: string;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function BreadcrumbItem({ href, class: className, children, ...rest }: BreadcrumbItemProps) {
    const classes = ["govuk-breadcrumbs__list-item", className ?? ""].filter(Boolean).join(" ");

    return (
        <li className={classes} {...rest}>
            <a className="govuk-breadcrumbs__link" href={href}>
                {children ?? ""}
            </a>
        </li>
    );
}
