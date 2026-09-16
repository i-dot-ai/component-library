import { ReactNode } from 'react';

type DetailsTextProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function DetailsText({ class: className, children, ...rest }: DetailsTextProps) {
    const classes = ["govuk-details__text", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
