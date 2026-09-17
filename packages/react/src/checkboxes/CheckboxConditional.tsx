import { ReactNode } from 'react';

type CheckboxConditionalProps = {
    hidden?: boolean;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function CheckboxConditional({ hidden = true, class: className, children, ...rest }: CheckboxConditionalProps) {
    const classes = [
        "govuk-checkboxes__conditional",
        hidden ? "govuk-checkboxes__conditional--hidden" : "",
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
