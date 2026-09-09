// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TabsListProps = {
    class?: string;
    children?: React.ReactNode;
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
