// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TableBodyProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TableBody({ class: className, children, ...rest }: TableBodyProps) {
    const classes = ["govuk-table__body", className ?? ""].filter(Boolean).join(" ");

    return (
        <tbody className={classes} {...rest}>
            {children ?? ""}
        </tbody>
    );
}
