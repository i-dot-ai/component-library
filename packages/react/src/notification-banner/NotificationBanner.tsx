import { ReactNode } from 'react';

type NotificationBannerProps = {
    success?: string;
    class?: string;
    children?: ReactNode;
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
