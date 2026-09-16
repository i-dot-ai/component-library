import { ReactNode } from 'react';

type CheckboxDividerProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function CheckboxDivider({ class: className, children }: CheckboxDividerProps) {
    const classes = ["govuk-checkboxes__divider", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes}>
            {children ?? "or"}
        </div>
    );
}
