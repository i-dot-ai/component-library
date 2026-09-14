// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TabPanelProps = {
    hidden?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TabPanel({ hidden, class: className, children, ...rest }: TabPanelProps) {
    const classes = [
        "govuk-tabs__panel",
        hidden ? "govuk-tabs__panel--hidden" : "",
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
