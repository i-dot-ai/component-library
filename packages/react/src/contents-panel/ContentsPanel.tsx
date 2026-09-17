import { ReactNode } from 'react';

type ContentsPanelProps = {
    heading?: string;
    headingId?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ContentsPanel({
    heading = "Pages in this section",
    headingId = "contents-panel-heading",
    class: className,
    children,
    ...rest
}: ContentsPanelProps) {
    const classes = ["contents-panel", className ?? ""].filter(Boolean).join(" ");

    return (
        <nav className={classes} aria-labelledby={headingId} {...rest}>
            <h2 className="govuk-visually-hidden" id={headingId}>
                {heading}
            </h2>
            {children}
        </nav>
    );
}
