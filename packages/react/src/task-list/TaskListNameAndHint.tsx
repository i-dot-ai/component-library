import { ReactNode } from 'react';

type TaskListNameAndHintProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function TaskListNameAndHint({ class: className, children, ...rest }: TaskListNameAndHintProps) {
    const classes = ["govuk-task-list__name-and-hint", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
