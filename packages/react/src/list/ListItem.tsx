import { ReactNode } from 'react';

type ListItemProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function ListItem({ class: className, children, ...rest }: ListItemProps) {
    const classes = ["govuk-list-item", className ?? ""].filter(Boolean).join(" ");

    return (
        <li className={classes} {...rest}>
            {children ?? ""}
        </li>
    );
}
