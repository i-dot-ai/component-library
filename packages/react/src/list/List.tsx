// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ListProps = {
    spaced?: boolean;
    numbered?: string;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function List({ spaced, numbered, class: className, children, ...rest }: ListProps) {

    return (
        numbered ? (
        <ol className={["govuk-list govuk-list--number", spaced ? "govuk-list--spaced" : "", className ?? ""].filter(Boolean).join(" ")} {...rest}>
            {children ?? ""}
        </ol>
        ) : (
        <ul className={["govuk-list", spaced ? "govuk-list--spaced" : "", className ?? ""].filter(Boolean).join(" ")} {...rest}>
            {children ?? ""}
        </ul>
        )
    );
}
