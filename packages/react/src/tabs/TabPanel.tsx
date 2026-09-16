import { ReactNode } from 'react';

type TabPanelProps = {
    hidden?: boolean;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function TabPanel({ hidden, class: className, children, ...rest }: TabPanelProps) {
    const classes = [
        "govuk-tabs__panel",
        hidden ? "govuk-tabs__panel--hidden" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
