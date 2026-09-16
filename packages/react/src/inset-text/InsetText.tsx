import { ReactNode } from 'react';

type InsetTextProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function InsetText({ class: className, children, ...rest }: InsetTextProps) {
    const classes = ["govuk-inset-text", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
