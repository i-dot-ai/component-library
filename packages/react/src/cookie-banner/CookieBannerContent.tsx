// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CookieBannerContentProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CookieBannerContent({ class: className, children, ...rest }: CookieBannerContentProps) {
    const classes = ["govuk-cookie-banner__content", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
