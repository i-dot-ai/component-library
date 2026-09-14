// AUTO-GENERATED from HTML spec. Do not edit by hand.

type SideNavSubnavHeadingProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function SideNavSubnavHeading({ class: className, children, ...rest }: SideNavSubnavHeadingProps) {
    const classes = ["side-nav__section-heading", className ?? ""].filter(Boolean).join(" ");

    return (
        <h3 className={classes} {...rest}>
            {children ?? ""}
        </h3>
    );
}
