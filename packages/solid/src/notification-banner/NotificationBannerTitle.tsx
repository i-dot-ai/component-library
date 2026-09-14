// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type NotificationBannerTitleProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function NotificationBannerTitle(props: NotificationBannerTitleProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-notification-banner__title", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <h2 class={classes()} id="govuk-notification-banner-title" {...rest}>
            {local.children ?? ""}
        </h2>
    );
}
