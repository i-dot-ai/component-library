// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type NotificationBannerProps = {
    success?: string;
    class?: string;
    children?: JSX.Element;
    [key: string]: unknown;
};

export default function NotificationBanner(props: NotificationBannerProps) {
    const [local, rest] = splitProps(props, ["success", "class", "children"]);

    return (
        local.success ? (
        <div class={["govuk-notification-banner govuk-notification-banner--success", local.class ?? ""].filter(Boolean).join(" ")} role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner" {...rest}>
            {local.children ?? ""}
        </div>
        ) : (
        <div class={["govuk-notification-banner", local.class ?? ""].filter(Boolean).join(" ")} role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner" {...rest}>
            {local.children ?? ""}
        </div>
        )
    );
}
