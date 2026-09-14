// AUTO-GENERATED from HTML spec. Do not edit by hand.

type NotificationBannerHeadingProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function NotificationBannerHeading({ class: className, children, ...rest }: NotificationBannerHeadingProps) {
    const classes = ["govuk-notification-banner__heading", className ?? ""].filter(Boolean).join(" ");

    return (
        <p className={classes} {...rest}>
            {children ?? ""}
        </p>
    );
}
