// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TaskListProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TaskList({ class: className, children, ...rest }: TaskListProps) {
    const classes = ["govuk-task-list", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children ?? ""}
        </ul>
    );
}
