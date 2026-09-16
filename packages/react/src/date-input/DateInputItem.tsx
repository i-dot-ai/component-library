import { ReactNode } from 'react';

type DateInputItemProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function DateInputItem({ class: className, children, ...rest }: DateInputItemProps) {
    const classes = ["govuk-date-input__item", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
