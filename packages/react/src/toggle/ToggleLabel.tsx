// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ToggleLabelProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function ToggleLabel({ class: className, children, ...rest }: ToggleLabelProps) {
    const classes = ["govuk-label iai-toggle__label", className ?? ""].filter(Boolean).join(" ");

    return (
        <label className={classes} {...rest}>
            {children ?? ""}
        </label>
    );
}
