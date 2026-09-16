import { ReactNode } from 'react';

type NotificationBannerContentProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function NotificationBannerContent({ class: className, children, ...rest }: NotificationBannerContentProps) {
    const classes = ["govuk-notification-banner__content", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
