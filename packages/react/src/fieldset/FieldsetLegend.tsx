import { ReactNode } from 'react';

type FieldsetLegendProps = {
    size?: "small" | "medium" | "large" | "xl";
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function FieldsetLegend({ size, class: className, children, ...rest }: FieldsetLegendProps) {
    const classes = [
        "govuk-fieldset__legend",
        ({ "small": "govuk-fieldset__legend--s", "medium": "govuk-fieldset__legend--m", "large": "govuk-fieldset__legend--l", "xl": "govuk-fieldset__legend--xl" }[size] ?? ""),
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <legend className={classes} {...rest}>
            {children ?? ""}
        </legend>
    );
}
