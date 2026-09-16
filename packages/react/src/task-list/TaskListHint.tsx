import { ReactNode } from 'react';

type TaskListHintProps = {
    class?: string;
    children?: ReactNode;
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
