import { ReactNode } from 'react';

type NotificationBannerHeaderProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function NotificationBannerHeader({ class: className, children, ...rest }: NotificationBannerHeaderProps) {
    const classes = ["govuk-notification-banner__header", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
