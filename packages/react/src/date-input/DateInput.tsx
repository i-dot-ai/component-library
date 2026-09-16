import { ReactNode } from 'react';

type DateInputProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function DateInput({ class: className, children, ...rest }: DateInputProps) {
    const classes = ["govuk-date-input", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
