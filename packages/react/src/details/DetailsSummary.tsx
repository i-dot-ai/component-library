// AUTO-GENERATED from HTML spec. Do not edit by hand.

type DetailsSummaryProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function DetailsSummary({ class: className, children, ...rest }: DetailsSummaryProps) {
    const classes = ["govuk-details__summary", className ?? ""].filter(Boolean).join(" ");

    return (
        <summary className={classes} {...rest}>
            <span className="govuk-details__summary-text">
                {children ?? ""}
            </span>
        </summary>
    );
}
