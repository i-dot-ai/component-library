// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SkipLinkProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SkipLink({ class: className, children, ...rest }: SkipLinkProps) {
    const classes = ["govuk-skip-link", className ?? ""].filter(Boolean).join(" ");

    return (
        <a className={classes} data-module="govuk-skip-link" {...rest}>
            {children ?? ""}
        </a>
    );
}
