// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TabPanelProps = {
    hidden?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function TabPanel(props: TabPanelProps) {
    const [local, rest] = splitProps(props, ["hidden", "class", "children"]);
    const classes = () =>
        [
            "govuk-tabs__panel",
            local.hidden ? "govuk-tabs__panel--hidden" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
