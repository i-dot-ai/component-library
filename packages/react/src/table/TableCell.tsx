// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TableCellProps = {
    numeric?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TableCell({ numeric, class: className, children, ...rest }: TableCellProps) {
    const classes = [
        "govuk-table__cell",
        numeric ? "govuk-table__cell--numeric" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <td className={classes} {...rest}>
            {children ?? ""}
        </td>
    );
}
