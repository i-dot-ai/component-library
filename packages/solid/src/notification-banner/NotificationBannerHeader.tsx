// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type NotificationBannerHeaderProps = {
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function NotificationBannerHeader(props: NotificationBannerHeaderProps) {
    const [local, rest] = splitProps(props, ["class", "children"]);
    const classes = () =>
        ["govuk-notification-banner__header", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <div class={classes()} {...rest}>
            {local.children ?? ""}
        </div>
    );
}
