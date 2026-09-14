// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TextareaProps = {
    error?: boolean;
    subtle?: boolean;
    class?: string;
    [key: string]: unknown;
};

export default function Textarea({ error, subtle, class: className, ...rest }: TextareaProps) {
    const classes = [
        "govuk-textarea",
        error ? "govuk-textarea--error" : "",
        subtle ? "govuk-textarea--subtle" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <textarea className={classes} {...rest}></textarea>
    );
}
