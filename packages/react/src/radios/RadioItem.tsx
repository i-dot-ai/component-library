// AUTO-GENERATED from HTML spec. Do not edit by hand.

type RadioItemProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function RadioItem({ class: className, children, ...rest }: RadioItemProps) {
    const classes = ["govuk-radios__item", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
