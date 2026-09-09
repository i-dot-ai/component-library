// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TaskListNameAndHintProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TaskListNameAndHint(props: TaskListNameAndHintProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-task-list__name-and-hint", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
