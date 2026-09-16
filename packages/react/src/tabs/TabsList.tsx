import { ReactNode } from 'react';

type TabsListProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function TabsList({ class: className, children, ...rest }: TabsListProps) {
    const classes = ["govuk-tabs__list", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children ?? ""}
        </ul>
    );
}
