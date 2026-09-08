// AUTO-GENERATED from HTML spec. Do not edit by hand.

type RadiosProps = {
    inline?: boolean;
    small?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Radios({ inline, small, class: className, children, ...rest }: RadiosProps) {
    const classes = [
        "govuk-radios",
        inline ? "govuk-radios--inline" : "",
        small ? "govuk-radios--small" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} data-module="govuk-radios" {...rest}>
            {children ?? ""}
        </div>
    );
}
