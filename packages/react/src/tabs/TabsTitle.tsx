// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TabsTitleProps = {
    class?: string;
    children?: React.ReactNode;
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
