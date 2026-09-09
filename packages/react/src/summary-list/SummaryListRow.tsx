// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SummaryListRowProps = {
    noActions?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SummaryListRow({ noActions, class: className, children, ...rest }: SummaryListRowProps) {
    const classes = [
        "govuk-summary-list__row",
        noActions ? "govuk-summary-list__row--no-actions" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
