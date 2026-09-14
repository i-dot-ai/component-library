// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CardLinkProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CardLink({ class: className, children, ...rest }: CardLinkProps) {
    const classes = ["iai-card__link", className ?? ""].filter(Boolean).join(" ");

    return (
        <a className={classes} {...rest}>
            {children ?? ""}
        </a>
    );
}
