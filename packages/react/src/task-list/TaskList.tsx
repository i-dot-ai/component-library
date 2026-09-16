import { ReactNode } from 'react';

type TaskListProps = {
    class?: string;
    children?: ReactNode;
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
