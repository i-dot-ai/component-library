// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ErrorSummaryListProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryList({ class: className, children, ...rest }: ErrorSummaryListProps) {
    const classes = ["govuk-list govuk-error-summary__list", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children ?? ""}
        </ul>
    );
}
