/** @jsxImportSource react */

import { ReactNode } from 'react';

type TableRowProps = {
    class?: string;
    children?: ReactNode;
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
