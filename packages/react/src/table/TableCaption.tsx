/** @jsxImportSource react */

import { ReactNode } from 'react';

type TableCaptionProps = {
    size?: "small" | "medium" | "large" | "xl";
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function TableCaption({ size, class: className, children, ...rest }: TableCaptionProps) {
    const classes = [
        "govuk-table__caption",
        ({ "small": "govuk-table__caption--s", "medium": "govuk-table__caption--m", "large": "govuk-table__caption--l", "xl": "govuk-table__caption--xl" }[size] ?? ""),
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <caption className={classes} {...rest}>
            {children ?? ""}
        </caption>
    );
}
