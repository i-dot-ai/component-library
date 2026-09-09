// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TaskListItemProps = {
    withLink?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TaskListItem(props: TaskListItemProps) {
    const [local, rest] = splitProps(props, ["withLink", "class", "children"]);
    const classes = () =>
        [
            "govuk-task-list__item",
            local.withLink ? "govuk-task-list__item--with-link" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <li class={classes()} {...rest}>
            {local.children ?? ""}
        </li>
    );
}
