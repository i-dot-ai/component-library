// AUTO-GENERATED from HTML spec. Do not edit by hand.

type HeaderProps = {
    href?: string;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Header({ href, class: className, children, ...rest }: HeaderProps) {
    const classes = ["govuk-generic-header", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            <div className="govuk-generic-header__container govuk-width-container">
                <div className="govuk-generic-header__logo">
                    <a className="govuk-generic-header__homepage-link" href={href}>
                        {children ?? ""}
                    </a>
                </div>
            </div>
        </div>
    );
}
