/** @jsxImportSource react */

import { ReactNode } from 'react';

type TableHeadProps = {
    class?: string;
    children?: ReactNode;
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
