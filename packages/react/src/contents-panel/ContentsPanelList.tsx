import { ReactNode } from 'react';

type ContentsPanelListProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ContentsPanelList({ class: className, children, ...rest }: ContentsPanelListProps) {
    const classes = ["contents-panel__list", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children}
        </ul>
    );
}
