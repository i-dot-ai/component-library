// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TableRowProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TableRow({ class: className, children, ...rest }: TableRowProps) {
    const classes = ["govuk-table__row", className ?? ""].filter(Boolean).join(" ");

    return (
        <tr className={classes} {...rest}>
            {children ?? ""}
        </tr>
    );
}
