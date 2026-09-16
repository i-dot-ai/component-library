/** @jsxImportSource react */

import { ReactNode } from 'react';

type TableBodyProps = {
    class?: string;
    children?: ReactNode;
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
