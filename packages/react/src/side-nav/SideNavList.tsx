import { ReactNode } from 'react';

type SideNavListProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SideNavList({ class: className, children, ...rest }: SideNavListProps) {
    const classes = ["govuk-list govuk-list--spaced", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children ?? ""}
        </ul>
    );
}
