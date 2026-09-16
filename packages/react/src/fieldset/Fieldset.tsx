import { ReactNode } from 'react';

type FieldsetProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Fieldset({ class: className, children, ...rest }: FieldsetProps) {
    const classes = ["govuk-fieldset", className ?? ""].filter(Boolean).join(" ");

    return (
        <fieldset className={classes} {...rest}>
            {children ?? ""}
        </fieldset>
    );
}
