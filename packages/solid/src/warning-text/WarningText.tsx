// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type WarningTextProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function WarningText(props: WarningTextProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-warning-text", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            <span class="govuk-warning-text__icon" aria-hidden="true">
                !
            </span>
            <strong class="govuk-warning-text__text">
                <span class="govuk-visually-hidden">
                    Warning
                </span>
                {local.children ?? ""}
            </strong>
        </div>
    );
}
