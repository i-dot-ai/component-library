// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SummaryListProps = {
    noBorder?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SummaryList({ noBorder, class: className, children, ...rest }: SummaryListProps) {
    const classes = [
        "govuk-summary-list",
        noBorder ? "govuk-summary-list--no-border" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <dl className={classes} {...rest}>
            {children ?? ""}
        </dl>
    );
}
