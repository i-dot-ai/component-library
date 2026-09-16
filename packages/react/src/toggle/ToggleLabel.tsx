import { ReactNode } from 'react';

type ToggleLabelProps = {
    class?: string;
    children?: ReactNode;
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
