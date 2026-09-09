// AUTO-GENERATED from HTML spec. Do not edit by hand.

type DateInputItemProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function DateInputItem({ class: className, children, ...rest }: DateInputItemProps) {
    const classes = ["govuk-date-input__item", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
