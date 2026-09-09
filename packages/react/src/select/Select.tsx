// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SelectProps = {
    subtle?: boolean;
    error?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Select({ subtle, error, class: className, children, ...rest }: SelectProps) {
    const classes = [
        "govuk-select",
        subtle ? "govuk-select--subtle" : "",
        error ? "govuk-select--error" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <select className={classes} {...rest}>
            {children ?? ""}
        </select>
    );
}
