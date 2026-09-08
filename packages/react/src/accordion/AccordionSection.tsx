// AUTO-GENERATED from HTML spec. Do not edit by hand.

type AccordionSectionProps = {
    class?: string;
    children?: React.ReactNode;
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
