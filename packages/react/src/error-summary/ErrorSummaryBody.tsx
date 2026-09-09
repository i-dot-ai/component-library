// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ErrorSummaryBodyProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryBody({ class: className, children, ...rest }: ErrorSummaryBodyProps) {
    const classes = ["govuk-error-summary__body", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
