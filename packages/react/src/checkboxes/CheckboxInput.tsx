// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CheckboxInputProps = {
    class?: string;
    [key: string]: unknown;
};

export default function CheckboxInput({ class: className, ...rest }: CheckboxInputProps) {
    const classes = ["govuk-checkboxes__input", className ?? ""].filter(Boolean).join(" ");

    return (
        <input className={classes} type="checkbox" {...rest} />
    );
}
