import { ReactNode } from 'react';

type ContentsPanelThemeProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ContentsPanelTheme({ class: className, children, ...rest }: ContentsPanelThemeProps) {
    const classes = ["contents-panel__theme", className ?? ""].filter(Boolean).join(" ");

    return (
        <h3 className={classes} {...rest}>
            {children}
        </h3>
    );
}
