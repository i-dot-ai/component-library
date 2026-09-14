// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CookieBannerContentProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function CookieBannerContent(props: CookieBannerContentProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-cookie-banner__content", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
