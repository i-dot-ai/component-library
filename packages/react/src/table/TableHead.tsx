// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TableHeadProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TableHead({ class: className, children, ...rest }: TableHeadProps) {
    const classes = ["govuk-table__head", className ?? ""].filter(Boolean).join(" ");

    return (
        <thead className={classes} {...rest}>
            {children ?? ""}
        </thead>
    );
}
