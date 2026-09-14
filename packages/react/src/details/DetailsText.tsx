// AUTO-GENERATED from HTML spec. Do not edit by hand.

type DetailsTextProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function DetailsText({ class: className, children, ...rest }: DetailsTextProps) {
    const classes = ["govuk-details__text", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
