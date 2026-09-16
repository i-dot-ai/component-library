import { ReactNode } from 'react';

type ToggleItemProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ToggleItem({ class: className, children, ...rest }: ToggleItemProps) {
    const classes = ["iai-toggle__item", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} data-module="govuk-toggle" {...rest}>
            {children ?? ""}
        </div>
    );
}
