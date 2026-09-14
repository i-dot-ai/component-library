// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type TagProps = {
    colour?: "grey" | "green" | "turquoise" | "blue" | "light-blue" | "purple" | "pink" | "red" | "orange" | "yellow";
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function Tag(props: TagProps) {
    const [local, rest] = splitProps(props, ["colour", "class", "children"]);
    const classes = () =>
        [
            "govuk-tag",
            ({ "grey": "govuk-tag--grey", "green": "govuk-tag--green", "turquoise": "govuk-tag--turquoise", "blue": "govuk-tag--blue", "light-blue": "govuk-tag--light-blue", "purple": "govuk-tag--purple", "pink": "govuk-tag--pink", "red": "govuk-tag--red", "orange": "govuk-tag--orange", "yellow": "govuk-tag--yellow" }[local.colour] ?? ""),
            local.class ?? "",
        ]
            .filter(Boolean)
            .join(" ");

    return (
        <strong class={classes()} {...rest}>
            {local.children ?? ""}
        </strong>
    );
}
