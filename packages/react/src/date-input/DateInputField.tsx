// AUTO-GENERATED from HTML spec. Do not edit by hand.

type DateInputFieldProps = {
    width?: "2" | "3" | "4";
    class?: string;
    [key: string]: unknown;
};

export default function DateInputField({ width = "2", class: className, ...rest }: DateInputFieldProps) {
    const classes = [
        "govuk-input govuk-date-input__input",
        ({ "2": "govuk-input--width-2", "3": "govuk-input--width-3", "4": "govuk-input--width-4" }[width] ?? ""),
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <input className={classes} type="text" inputmode="numeric" {...rest} />
    );
}
