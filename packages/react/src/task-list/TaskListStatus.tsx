// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TaskListStatusProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TaskListStatus({ class: className, children, ...rest }: TaskListStatusProps) {
    const classes = ["govuk-task-list__status", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
