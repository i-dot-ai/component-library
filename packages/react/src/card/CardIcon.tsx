import { ReactNode } from 'react';

type CardIconProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function CardIcon({ class: className, children, ...rest }: CardIconProps) {
    const classes = ["iai-card__icon", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} aria-hidden="true" {...rest}>
            {children ?? ""}
        </div>
    );
}
