// AUTO-GENERATED from HTML spec. Do not edit by hand.

type RadioInputProps = {
    class?: string;
    [key: string]: unknown;
};

export default function RadioInput({ class: className, ...rest }: RadioInputProps) {
    const classes = ["govuk-radios__input", className ?? ""].filter(Boolean).join(" ");

    return (
        <input className={classes} type="radio" {...rest} />
    );
}
