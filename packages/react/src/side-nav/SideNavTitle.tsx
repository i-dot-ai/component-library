// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SideNavTitleProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SideNavTitle({ class: className, children, ...rest }: SideNavTitleProps) {
    const classes = ["side-nav__title", className ?? ""].filter(Boolean).join(" ");

    return (
        <h2 className={classes} {...rest}>
            {children ?? ""}
        </h2>
    );
}
