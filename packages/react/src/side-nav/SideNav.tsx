// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SideNavProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SideNav({ class: className, children, ...rest }: SideNavProps) {
    const classes = ["side-nav", className ?? ""].filter(Boolean).join(" ");

    return (
        <nav className={classes} {...rest}>
            {children ?? ""}
        </nav>
    );
}
