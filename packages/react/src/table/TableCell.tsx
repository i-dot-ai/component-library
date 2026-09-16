/** @jsxImportSource react */

import { ReactNode } from 'react';

type TableCellProps = {
    numeric?: boolean;
    class?: string;
    children?: ReactNode;
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
