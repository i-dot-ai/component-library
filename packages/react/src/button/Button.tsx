// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ButtonProps = {
    secondary?: boolean;
    warning?: boolean;
    inverse?: boolean;
    href?: string;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Button({ secondary, warning, inverse, href, class: className, children, ...rest }: ButtonProps) {
    const classes = [
        "govuk-button",
        secondary ? "govuk-button--secondary" : "",
        warning ? "govuk-button--warning" : "",
        inverse ? "govuk-button--inverse" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        href ? (
        <a href={href} role="button" className={classes} {...rest}>
            {children ?? ""}
        </a>
        ) : (
        <button className={classes} data-module="govuk-button" {...rest}>
            {children ?? ""}
        </button>
        )
    );
}
