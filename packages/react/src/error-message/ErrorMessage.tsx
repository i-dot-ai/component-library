// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ErrorMessageProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function ErrorMessage({ class: className, children, ...rest }: ErrorMessageProps) {
    const classes = ["govuk-error-message", className ?? ""].filter(Boolean).join(" ");

    return (
        <p className={classes} {...rest}>
            <span className="govuk-visually-hidden">
                Error:
            </span>
            {children ?? ""}
        </p>
    );
}
