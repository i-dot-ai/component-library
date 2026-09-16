import { ReactNode } from 'react';

type AccordionSectionHeadingProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function AccordionSectionHeading({ class: className, children, ...rest }: AccordionSectionHeadingProps) {
    const classes = ["govuk-accordion__section-button", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className="govuk-accordion__section-heading">
            <span className={classes} {...rest}>
                {children ?? ""}
            </span>
        </h2>
    );
}
