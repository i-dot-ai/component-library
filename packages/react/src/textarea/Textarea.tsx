type TextareaProps = {
    error?: boolean;
    subtle?: boolean;
    value?: string;
    class?: string;
    [key: string]: unknown;
};

export default function Textarea({ error, subtle, value, class: className, ...rest }: TextareaProps) {
    const classes = [
        "govuk-textarea",
        error ? "govuk-textarea--error" : "",
        subtle ? "govuk-textarea--subtle" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <textarea className={classes} defaultValue={value} {...rest}></textarea>
    );
}
