// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CardContentProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CardContent({ class: className, children, ...rest }: CardContentProps) {
    const classes = ["iai-card__content", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
