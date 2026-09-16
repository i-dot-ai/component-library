type CharacterCountProps = {
    class?: string;
    [key: string]: unknown;
};

export default function CharacterCount({ class: className, ...rest }: CharacterCountProps) {
    const classes = ["govuk-textarea govuk-js-character-count", className ?? ""].filter(Boolean).join(" ");

    return (
        <textarea className={classes} {...rest}></textarea>
    );
}
