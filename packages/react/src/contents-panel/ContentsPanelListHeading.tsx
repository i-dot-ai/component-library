import { ReactNode } from 'react';

type ContentsPanelListHeadingProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ContentsPanelListHeading({ class: className, children, ...rest }: ContentsPanelListHeadingProps) {
    const classes = ["contents-panel__list-heading", className ?? ""].filter(Boolean).join(" ");

    return (
        <h3 className={classes} {...rest}>
            {children}
        </h3>
    );
}
