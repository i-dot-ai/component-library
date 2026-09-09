// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SelectOptionProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SelectOption({ class: className, children, ...rest }: SelectOptionProps) {
    const classes = ["", className ?? ""].filter(Boolean).join(" ");

    return (
        <option className={classes} {...rest}>
            {children ?? ""}
        </option>
    );
}
