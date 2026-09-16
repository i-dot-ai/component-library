import { ReactNode } from 'react';

type TaskListItemProps = {
    withLink?: boolean;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function TaskListItem({ withLink, class: className, children, ...rest }: TaskListItemProps) {
    const classes = [
        "govuk-task-list__item",
        withLink ? "govuk-task-list__item--with-link" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <li className={classes} {...rest}>
            {children ?? ""}
        </li>
    );
}
