import { ReactNode } from 'react';

type ButtonGroupProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ButtonGroup({ class: className, children, ...rest }: ButtonGroupProps) {
    const classes = ["govuk-button-group", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
