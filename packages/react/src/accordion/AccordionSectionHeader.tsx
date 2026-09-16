import { ReactNode } from 'react';

type AccordionSectionHeaderProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function AccordionSectionHeader({ class: className, children, ...rest }: AccordionSectionHeaderProps) {
    const classes = ["govuk-accordion__section-header", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
