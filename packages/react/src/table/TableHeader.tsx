/** @jsxImportSource react */

import { ReactNode } from 'react';

type TableHeaderProps = {
    numeric?: boolean;
    scope?: "col" | "row" | "colgroup" | "rowgroup";
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function TableHeader({ numeric, scope = "col", class: className, children, ...rest }: TableHeaderProps) {
    const classes = [
        "govuk-table__header",
        numeric ? "govuk-table__header--numeric" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <th className={classes} scope={scope} {...rest}>
            {children ?? ""}
        </th>
    );
}
