// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ErrorSummaryTitleProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryTitle({ class: className, children, ...rest }: ErrorSummaryTitleProps) {
    const classes = ["govuk-error-summary__title", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className={classes} {...rest}>
            {children ?? ""}
        </h2>
    );
}
