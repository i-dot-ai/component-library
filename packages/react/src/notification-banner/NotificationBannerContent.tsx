// AUTO-GENERATED from HTML spec. Do not edit by hand.

type NotificationBannerContentProps = {
    class?: string;
    children?: React.ReactNode;
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
