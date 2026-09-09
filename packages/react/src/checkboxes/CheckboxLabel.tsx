// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CheckboxLabelProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CheckboxLabel({ class: className, children, ...rest }: CheckboxLabelProps) {
    const classes = ["govuk-label govuk-checkboxes__label", className ?? ""].filter(Boolean).join(" ");

    return (
        <label className={classes} {...rest}>
            {children ?? ""}
        </label>
    );
}
