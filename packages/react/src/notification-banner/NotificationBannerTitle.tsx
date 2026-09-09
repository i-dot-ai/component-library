// AUTO-GENERATED from HTML spec. Do not edit by hand.

type NotificationBannerTitleProps = {
    class?: string;
    children?: React.ReactNode;
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
