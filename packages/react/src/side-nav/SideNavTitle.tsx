import { ReactNode } from 'react';

type SideNavTitleProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SideNavTitle({ class: className, children, ...rest }: SideNavTitleProps) {
    const classes = ["side-nav__title", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className={classes} {...rest}>
            {children ?? ""}
        </h2>
    );
}
