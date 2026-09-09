// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CardProps = {
    secondary?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Card({ secondary, class: className, children, ...rest }: CardProps) {
    const classes = [
        "iai-card",
        secondary ? "iai-card--secondary" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
