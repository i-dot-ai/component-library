import { ReactNode } from 'react';

type ErrorSummaryItemProps = {
    href?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryItem({ href, class: className, children, ...rest }: ErrorSummaryItemProps) {
    if (href === undefined) {
        return <li>{children ?? ""}</li>;
    }

    return (
        <li>
            <a href={href} className={className} {...rest}>
                {children ?? ""}
            </a>
        </li>
    );
}
