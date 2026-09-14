// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps, mergeProps } from "solid-js";
import type { JSX } from "solid-js";

type DateInputFieldProps = {
    width?: "2" | "3" | "4";
    class?: string;
    [key: string]: unknown;
};

export default function DateInputField(props: DateInputFieldProps) {
    const merged = mergeProps({ width: "2" }, props);
    const [local, rest] = splitProps(merged, ["width", "class"]);
    const classes = () =>
        [
            "govuk-input govuk-date-input__input",
            ({ "2": "govuk-input--width-2", "3": "govuk-input--width-3", "4": "govuk-input--width-4" }[local.width] ?? ""),
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <input class={classes()} type="text" inputmode="numeric" {...rest} />
    );
}
