// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CookieBannerMessageProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CookieBannerMessage({ class: className, children, ...rest }: CookieBannerMessageProps) {
    const classes = ["govuk-cookie-banner__message govuk-width-container", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
