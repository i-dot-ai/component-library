import { ReactNode } from 'react';

type TaskListStatusProps = {
    class?: string;
    children?: ReactNode;
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
