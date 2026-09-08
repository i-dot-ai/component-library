// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type RadiosProps = {
    inline?: boolean;
    small?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Radios(props: RadiosProps) {
    const [local, rest] = splitProps(props, ["inline", "small", "class", "children"]);
    const classes = () =>
        [
            "govuk-radios",
            local.inline ? "govuk-radios--inline" : "",
            local.small ? "govuk-radios--small" : "",
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <div class={classes()} data-module="govuk-radios" {...rest}>
            {local.children ?? ""}
        </div>
    );
}
