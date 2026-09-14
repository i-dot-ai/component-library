// AUTO-GENERATED from HTML spec. Do not edit by hand.

type BackLinkProps = {
    inverse?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function BackLink({ inverse, class: className, children, ...rest }: BackLinkProps) {
    const classes = [
        "govuk-back-link",
        inverse ? "govuk-back-link--inverse" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <a className={classes} {...rest}>
            {children ?? ""}
        </a>
    );
}
