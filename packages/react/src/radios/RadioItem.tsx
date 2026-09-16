import { ReactNode } from 'react';

type RadioItemProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function RadioItem({ class: className, children, ...rest }: RadioItemProps) {
    const classes = ["govuk-radios__item", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
