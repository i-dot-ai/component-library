// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TaskListHintProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TaskListHint({ class: className, children, ...rest }: TaskListHintProps) {
    const classes = ["govuk-task-list__hint", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
