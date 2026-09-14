// AUTO-GENERATED from HTML spec. Do not edit by hand.

type NotificationBannerProps = {
    success?: string;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function NotificationBanner({ success, class: className, children, ...rest }: NotificationBannerProps) {

    return (
        success ? (
        <div className={["govuk-notification-banner govuk-notification-banner--success", className ?? ""].filter(Boolean).join(" ")} role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner" {...rest}>
            {children ?? ""}
        </div>
        ) : (
        <div className={["govuk-notification-banner", className ?? ""].filter(Boolean).join(" ")} role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner" {...rest}>
            {children ?? ""}
        </div>
        )
    );
}
