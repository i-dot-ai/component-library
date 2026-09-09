// AUTO-GENERATED from HTML spec. Do not edit by hand.

type CookieBannerActionsProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function CookieBannerActions({ class: className, children, ...rest }: CookieBannerActionsProps) {
    const classes = ["govuk-button-group", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
