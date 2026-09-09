// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CardIconProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CardIcon({ class: className, children, ...rest }: CardIconProps) {
    const classes = ["iai-card__icon", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} aria-hidden="true" {...rest}>
            {children ?? ""}
        </div>
    );
}
