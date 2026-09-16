import { ReactNode } from 'react';

type SelectOptionProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function SelectOption({ class: className, children, ...rest }: SelectOptionProps) {
    const classes = ["", className ?? ""].filter(Boolean).join(" ");

    return (
        <option className={classes} {...rest}>
            {children ?? ""}
        </option>
    );
}
