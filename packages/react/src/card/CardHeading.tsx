// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CardHeadingProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CardHeading({ class: className, children, ...rest }: CardHeadingProps) {
    const classes = ["iai-card__heading", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
