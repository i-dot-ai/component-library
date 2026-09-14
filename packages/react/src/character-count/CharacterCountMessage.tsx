// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CharacterCountMessageProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CharacterCountMessage({ class: className, children, ...rest }: CharacterCountMessageProps) {
    const classes = ["govuk-hint govuk-character-count__message", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
