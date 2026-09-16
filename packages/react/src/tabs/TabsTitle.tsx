import { ReactNode } from 'react';

type TabsTitleProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function TabsTitle({ class: className, children, ...rest }: TabsTitleProps) {
    const classes = ["govuk-tabs__title", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className={classes} {...rest}>
            {children ?? ""}
        </h2>
    );
}
