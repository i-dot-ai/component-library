// AUTO-GENERATED from HTML spec. Do not edit by hand.

type InsetTextProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function InsetText({ class: className, children, ...rest }: InsetTextProps) {
    const classes = ["govuk-inset-text", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
