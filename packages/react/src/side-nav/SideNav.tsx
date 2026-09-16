import { ReactNode } from 'react';

type SideNavProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SideNav({ class: className, children, ...rest }: SideNavProps) {
    const classes = ["side-nav", className ?? ""].filter(Boolean).join(" ");

    return (
        <nav className={classes} {...rest}>
            {children ?? ""}
        </nav>
    );
}
