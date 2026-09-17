import { ReactNode } from 'react';

type ContentsPanelSectionProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ContentsPanelSection({ class: className, children, ...rest }: ContentsPanelSectionProps) {
    const classes = ["contents-panel__section", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children}
        </ul>
    );
}
