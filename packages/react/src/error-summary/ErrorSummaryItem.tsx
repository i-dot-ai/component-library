import { ReactNode } from 'react';

type ErrorSummaryItemProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryItem({ class: className, children, ...rest }: ErrorSummaryItemProps) {
    const classes = ["", className ?? ""].filter(Boolean).join(" ");

    return (
        <li>
            <a className={classes} {...rest}>
                {children ?? ""}
            </a>
        </li>
    );
}
