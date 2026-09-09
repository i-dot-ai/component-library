// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CookieBannerProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CookieBanner({ class: className, children, ...rest }: CookieBannerProps) {
    const classes = ["govuk-cookie-banner", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} data-nosnippet="" role="region" aria-label="Cookie banner" {...rest}>
            {children ?? ""}
        </div>
    );
}
