import { ReactNode } from 'react';

type RadioLabelProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function RadioLabel({ class: className, children, ...rest }: RadioLabelProps) {
    const classes = ["govuk-label govuk-radios__label", className ?? ""].filter(Boolean).join(" ");

    return (
        <label className={classes} {...rest}>
            {children ?? ""}
        </label>
    );
}
