// AUTO-GENERATED from HTML spec. Do not edit by hand.

type AccordionSectionHeaderProps = {
    class?: string;
    children?: React.ReactNode;
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
