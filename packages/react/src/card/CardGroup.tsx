import { ReactNode } from 'react';

type CardGroupProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function CardGroup({ class: className, children, ...rest }: CardGroupProps) {
    const classes = ["iai-card-group", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
