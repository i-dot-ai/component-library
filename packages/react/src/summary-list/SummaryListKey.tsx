// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SummaryListKeyProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SummaryListKey({ class: className, children, ...rest }: SummaryListKeyProps) {
    const classes = ["govuk-summary-list__key", className ?? ""].filter(Boolean).join(" ");

    return (
        <dt className={classes} {...rest}>
            {children ?? ""}
        </dt>
    );
}
