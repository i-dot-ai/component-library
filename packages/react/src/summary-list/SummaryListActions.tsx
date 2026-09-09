// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SummaryListActionsProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SummaryListActions({ class: className, children, ...rest }: SummaryListActionsProps) {
    const classes = ["govuk-summary-list__actions", className ?? ""].filter(Boolean).join(" ");

    return (
        <dd className={classes} {...rest}>
            {children ?? ""}
        </dd>
    );
}
