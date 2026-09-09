// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TabProps = {
    selected?: boolean;
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function Tab({ selected, class: className, children, ...rest }: TabProps) {
    const classes = ["govuk-tabs__tab", className ?? ""].filter(Boolean).join(" ");

    return (
        <li className={["govuk-tabs__list-item", selected ? "govuk-tabs__list-item--selected" : ""].filter(Boolean).join(" ")}>
            <a className={classes} {...rest}>
                {children ?? ""}
            </a>
        </li>
    );
}
