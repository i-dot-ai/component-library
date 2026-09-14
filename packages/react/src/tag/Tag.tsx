// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TagProps = {
    colour?: "grey" | "green" | "turquoise" | "blue" | "light-blue" | "purple" | "pink" | "red" | "orange" | "yellow";
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Tag({ colour, class: className, children, ...rest }: TagProps) {
    const classes = [
        "govuk-tag",
        ({ "grey": "govuk-tag--grey", "green": "govuk-tag--green", "turquoise": "govuk-tag--turquoise", "blue": "govuk-tag--blue", "light-blue": "govuk-tag--light-blue", "purple": "govuk-tag--purple", "pink": "govuk-tag--pink", "red": "govuk-tag--red", "orange": "govuk-tag--orange", "yellow": "govuk-tag--yellow" }[colour] ?? ""),
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <strong className={classes} {...rest}>
            {children ?? ""}
        </strong>
    );
}
