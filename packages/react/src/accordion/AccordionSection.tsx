import { ReactNode } from 'react';

type AccordionSectionProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function AccordionSection({ class: className, children, ...rest }: AccordionSectionProps) {
    const classes = ["govuk-accordion__section", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
