import { ReactNode } from 'react';

type PanelActionsProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function PanelActions({ class: className, children, ...rest }: PanelActionsProps) {
    const classes = ["govuk-panel__actions", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}
