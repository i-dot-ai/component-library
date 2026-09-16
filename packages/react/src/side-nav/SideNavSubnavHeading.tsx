import { ReactNode } from 'react';

type SideNavSubnavHeadingProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SideNavSubnavHeading({ class: className, children, ...rest }: SideNavSubnavHeadingProps) {
    const classes = ["side-nav__section-heading", className ?? ""].filter(Boolean).join(" ");

    return (
        <h3 className={classes} {...rest}>
            {children ?? ""}
        </h3>
    );
}
