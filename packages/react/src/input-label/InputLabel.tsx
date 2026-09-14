// AUTO-GENERATED from HTML spec. Do not edit by hand.

type InputLabelProps = {
    size?: "small" | "medium" | "large" | "xl";
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function InputLabel({ size, class: className, children, ...rest }: InputLabelProps) {
    const classes = [
        "govuk-label",
        ({ "small": "govuk-label--s", "medium": "govuk-label--m", "large": "govuk-label--l", "xl": "govuk-label--xl" }[size] ?? ""),
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <label className={classes} {...rest}>
            {children ?? ""}
        </label>
    );
}
