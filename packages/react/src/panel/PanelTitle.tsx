import { ReactNode } from 'react';

type PanelTitleProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function PanelTitle({ class: className, children, ...rest }: PanelTitleProps) {
    const classes = ["govuk-panel__title", className ?? ""].filter(Boolean).join(" ");

    return (
        <h1 className={classes} {...rest}>
            {children}
        </h1>
    );
}
