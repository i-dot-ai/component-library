import { ReactNode } from 'react';

type SideNavSubnavListProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SideNavSubnavList({ class: className, children, ...rest }: SideNavSubnavListProps) {
    const classes = ["side-nav__subnav-list", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children ?? ""}
        </ul>
    );
}
