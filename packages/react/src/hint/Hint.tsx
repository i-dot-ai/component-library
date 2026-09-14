// AUTO-GENERATED from HTML spec. Do not edit by hand.

type HintProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Hint({ class: className, children, ...rest }: HintProps) {
    const classes = ["govuk-hint", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
