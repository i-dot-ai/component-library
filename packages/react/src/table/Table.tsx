/** @jsxImportSource react */
import { ReactNode } from 'react';

type TableProps = {
    smallTextUntilTablet?: boolean;
    subtle?: boolean;
    class?: string;
    children?: ReactNode;
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
