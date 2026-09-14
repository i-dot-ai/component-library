// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CookieBannerMessageProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function CookieBannerMessage(props: CookieBannerMessageProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-cookie-banner__message govuk-width-container", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
