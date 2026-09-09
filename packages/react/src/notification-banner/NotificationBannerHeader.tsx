// AUTO-GENERATED from HTML spec. Do not edit by hand.

type NotificationBannerHeaderProps = {
    class?: string;
    children?: React.ReactNode;
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
