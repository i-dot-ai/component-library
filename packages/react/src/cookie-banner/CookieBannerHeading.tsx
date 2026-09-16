import { ReactNode } from 'react';

type CookieBannerHeadingProps = {
    class?: string;
    children?: ReactNode;
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
