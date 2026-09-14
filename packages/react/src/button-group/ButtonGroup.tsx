// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ButtonGroupProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function ButtonGroup({ class: className, children, ...rest }: ButtonGroupProps) {
    const classes = ["govuk-button-group", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
