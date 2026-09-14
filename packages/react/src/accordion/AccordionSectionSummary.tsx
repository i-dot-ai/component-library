// AUTO-GENERATED from HTML spec. Do not edit by hand.

type AccordionSectionSummaryProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function AccordionSectionSummary({ class: className, children, ...rest }: AccordionSectionSummaryProps) {
    const classes = ["govuk-accordion__section-summary govuk-body", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
