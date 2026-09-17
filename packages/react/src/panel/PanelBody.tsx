import { ReactNode } from 'react';

type PanelBodyProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function PanelBody({ class: className, children, ...rest }: PanelBodyProps) {
    const classes = ["govuk-panel__body", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}
