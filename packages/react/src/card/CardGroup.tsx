// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CardGroupProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CardGroup({ class: className, children, ...rest }: CardGroupProps) {
    const classes = ["iai-card-group", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
