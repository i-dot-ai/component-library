/** @jsxImportSource solid-js */

import { splitProps, Show } from "solid-js";
import type { JSX } from "solid-js";

type FeedbackProps = {
    title?: string;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Feedback(props: FeedbackProps) {
    const [local, rest] = splitProps(props, ["title", "class", "children"]);
    const classes = () =>
        ["govuk-feedback govuk-width-container", local.class ?? ""]
            .filter(Boolean)
            .join(" ");

    return (
        <div class={classes()} {...rest}>
            <div class="govuk-grid-row">
                <div class="govuk-grid-column-two-thirds">
                    <h2 class="govuk-feedback__title">{local.title}</h2>
                    <Show when={local.children}>
                        <div class="govuk-feedback__body">{local.children}</div>
                    </Show>
                </div>
            </div>
        </div>
    );
}
