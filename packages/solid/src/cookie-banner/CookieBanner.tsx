// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type CookieBannerProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function CookieBanner(props: CookieBannerProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-cookie-banner", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} data-nosnippet="" role="region" aria-label="Cookie banner" {...rest}>
            {local.children ?? ""}
        </div>
    );
}
