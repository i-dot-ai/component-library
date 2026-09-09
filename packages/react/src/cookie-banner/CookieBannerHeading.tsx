// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CookieBannerHeadingProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CookieBannerHeading({ class: className, children, ...rest }: CookieBannerHeadingProps) {
    const classes = ["govuk-cookie-banner__heading govuk-heading-m", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className={classes} {...rest}>
            {children ?? ""}
        </h2>
    );
}
