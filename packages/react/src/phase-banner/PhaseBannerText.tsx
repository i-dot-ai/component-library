import { ReactNode } from 'react';

type PhaseBannerTextProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function PhaseBannerText({ class: className, children, ...rest }: PhaseBannerTextProps) {
    const classes = ["govuk-phase-banner__text", className ?? ""].filter(Boolean).join(" ");

    return (
        <span className={classes} {...rest}>
            {children ?? ""}
        </span>
    );
}
