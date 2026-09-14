// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ServiceNavigationProps = {
    sideNav?: boolean;
    inverse?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function ServiceNavigation({ sideNav, inverse, class: className, children, ...rest }: ServiceNavigationProps) {
    const classes = [
        "govuk-service-navigation",
        sideNav ? "govuk-service-navigation--side-nav" : "",
        inverse ? "govuk-service-navigation--inverse" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} data-module="govuk-service-navigation" {...rest}>
            <div className="govuk-width-container">
                <div className="govuk-service-navigation__container">
                    <nav className="govuk-service-navigation__wrapper" aria-label="Menu">
                        <ul className="govuk-service-navigation__list" id="navigation">
                            {children ?? ""}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
