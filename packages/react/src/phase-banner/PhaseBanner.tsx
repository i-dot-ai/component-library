import { ReactNode } from 'react';

type PhaseBannerProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function PhaseBanner({ class: className, children, ...rest }: PhaseBannerProps) {
    const classes = ["govuk-phase-banner", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            <p className="govuk-phase-banner__content">
                {children ?? ""}
            </p>
        </div>
    );
}
