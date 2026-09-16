import { ReactNode } from 'react';

type CardHeadingProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function CardHeading({ class: className, children, ...rest }: CardHeadingProps) {
    const classes = ["iai-card__heading", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
