import { ReactNode } from 'react';

type CheckboxLabelProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function CheckboxLabel({ class: className, children, ...rest }: CheckboxLabelProps) {
    const classes = ["govuk-label govuk-checkboxes__label", className ?? ""].filter(Boolean).join(" ");

    return (
        <label className={classes} {...rest}>
            {children ?? ""}
        </label>
    );
}
