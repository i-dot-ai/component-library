// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SideNavItemProps = {
    href?: string;
    class?: string;
    children?: React.ReactNode;
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
