// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TableProps = {
    smallTextUntilTablet?: boolean;
    subtle?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Table({ smallTextUntilTablet, subtle, class: className, children, ...rest }: TableProps) {
    const classes = [
        "govuk-table",
        smallTextUntilTablet ? "govuk-table--small-text-until-tablet" : "",
        subtle ? "govuk-table--subtle" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <table className={classes} {...rest}>
            {children ?? ""}
        </table>
    );
}
