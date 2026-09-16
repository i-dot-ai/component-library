import {
    Accordion,
    AccordionSection,
    AccordionSectionHeader,
    AccordionSectionHeading,
    AccordionSectionContent,
} from "@i-dot-ai-npm/component-library-react";

export default function ReactAccordion() {
    return (
        <Accordion id="react-accordion">
            <AccordionSection>
                <AccordionSectionHeader>
                    <AccordionSectionHeading>Section one</AccordionSectionHeading>
                </AccordionSectionHeader>
                <AccordionSectionContent>Content one</AccordionSectionContent>
            </AccordionSection>
        </Accordion>
    );
}
