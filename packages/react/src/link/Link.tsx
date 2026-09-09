// AUTO-GENERATED from HTML spec. Do not edit by hand.

type LinkProps = {
    noUnderline?: boolean;
    noVisitedState?: boolean;
    variant?: "warning" | "inverse";
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Link({ noUnderline, noVisitedState, variant, class: className, children, ...rest }: LinkProps) {
    const classes = [
        "govuk-link",
        noUnderline ? "govuk-link--no-underline" : "",
        noVisitedState ? "govuk-link--no-visited-state" : "",
        ({ "warning": "govuk-link--warning", "inverse": "govuk-link--inverse" }[variant] ?? ""),
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
