import { ReactNode } from 'react';

type HintProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Hint({ class: className, children, ...rest }: HintProps) {
    const classes = ["govuk-hint", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
