// govuk-frontend ships no type declarations and there is no @types package.
// Minimal ambient declaration covering the components initialised by the
// component-library packages consumed by this gallery.
declare module "govuk-frontend" {
    interface GOVUKComponent {
        moduleName: string;
        new (element: Element): unknown;
    }

    export const Accordion: GOVUKComponent;
    export const Tabs: GOVUKComponent;

    export function initAll(): void;
}
