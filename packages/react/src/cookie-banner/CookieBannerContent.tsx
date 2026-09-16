import { ReactNode } from 'react';

type CookieBannerContentProps = {
    class?: string;
    children?: ReactNode;
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
