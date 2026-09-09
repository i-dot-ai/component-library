// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SideNavSubnavListProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SideNavSubnavList({ class: className, children, ...rest }: SideNavSubnavListProps) {
    const classes = ["side-nav__subnav-list", className ?? ""].filter(Boolean).join(" ");

    return (
        <ul className={classes} {...rest}>
            {children ?? ""}
        </ul>
    );
}
