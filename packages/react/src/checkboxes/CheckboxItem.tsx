// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CheckboxItemProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CheckboxItem({ class: className, children, ...rest }: CheckboxItemProps) {
    const classes = ["govuk-checkboxes__item", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
