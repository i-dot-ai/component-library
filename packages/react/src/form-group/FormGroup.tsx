// AUTO-GENERATED from HTML spec. Do not edit by hand.

type FormGroupProps = {
    inline?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function FormGroup({ inline, class: className, children, ...rest }: FormGroupProps) {
    const classes = [
        "govuk-form-group",
        inline ? "govuk-form-group--inline" : "",
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
