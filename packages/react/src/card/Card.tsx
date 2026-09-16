import { ReactNode } from 'react';

type CardProps = {
    secondary?: boolean;
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function Card({ secondary, class: className, children, ...rest }: CardProps) {
    const classes = [
        "iai-card",
        secondary ? "iai-card--secondary" : "",
        className ?? "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
