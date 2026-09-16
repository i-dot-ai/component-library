import { ReactNode } from 'react';

type NotificationBannerTitleProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function NotificationBannerTitle({ class: className, children, ...rest }: NotificationBannerTitleProps) {
    const classes = ["govuk-notification-banner__title", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className={classes} id="govuk-notification-banner-title" {...rest}>
            {children ?? ""}
        </h2>
    );
}
