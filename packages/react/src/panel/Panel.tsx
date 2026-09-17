import { ReactNode } from 'react';

type PanelProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Panel({ class: className, children, ...rest }: PanelProps) {
    const isInterruption = (className ?? "").includes("govuk-panel--interruption");
    const classes = [
        "govuk-panel",
        isInterruption ? "" : "govuk-panel--confirmation",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
}
