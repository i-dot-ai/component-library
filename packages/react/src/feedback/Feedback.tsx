import { ReactNode } from 'react';

type FeedbackProps = {
    title?: string;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Feedback({ title, class: className, children, ...rest }: FeedbackProps) {
    const classes = ["govuk-feedback govuk-width-container", className ?? ""]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...rest}>
            <div className="govuk-grid-row">
                <div className="govuk-grid-column-two-thirds">
                    <h2 className="govuk-feedback__title">{title}</h2>
                    {children != null && children !== "" ? (
                        <div className="govuk-feedback__body">{children}</div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
