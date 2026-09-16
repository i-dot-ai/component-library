import { ReactNode } from 'react';

type CookieBannerActionsProps = {
    class?: string;
    children?: ReactNode;
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
