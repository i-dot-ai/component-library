// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CheckboxDividerProps = {
    class?: string;
    children?: React.ReactNode;
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
