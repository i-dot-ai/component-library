// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type FormGroupProps = {
    inline?: boolean;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function FormGroup(props: FormGroupProps) {
    const [local, rest] = splitProps(props, ["inline", "class", "children"]);
    const classes = () =>
        [
            "govuk-form-group",
            local.inline ? "govuk-form-group--inline" : "",
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
