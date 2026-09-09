// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ServiceNavigationItemProps = {
    href?: string;
    class?: string;
    children?: React.ReactNode;
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
