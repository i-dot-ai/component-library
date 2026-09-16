import { ReactNode } from 'react';

type AccordionSectionContentProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function AccordionSectionContent({ class: className, children, ...rest }: AccordionSectionContentProps) {
    const classes = ["govuk-accordion__section-content", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
