import { ReactNode } from 'react';

type FormGroupProps = {
    inline?: boolean;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function FormGroup({ inline, class: className, children, ...rest }: FormGroupProps) {
    const classes = [
        "govuk-form-group",
        inline ? "govuk-form-group--inline" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
