import { ReactNode } from 'react';

type CookieBannerMessageProps = {
    class?: string;
    children?: ReactNode;
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
