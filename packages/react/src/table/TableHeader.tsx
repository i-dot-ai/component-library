// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TableHeaderProps = {
    numeric?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TableHeader({ numeric, class: className, children, ...rest }: TableHeaderProps) {
    const classes = [
        "govuk-table__header",
        numeric ? "govuk-table__header--numeric" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <th className={classes} scope="col" {...rest}>
            {children ?? ""}
        </th>
    );
}
