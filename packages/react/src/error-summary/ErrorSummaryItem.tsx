// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ErrorSummaryItemProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function ErrorSummaryItem({ class: className, children, ...rest }: ErrorSummaryItemProps) {
    const classes = ["", className ?? ""].filter(Boolean).join(" ");

    return (
        <li>
            <a className={classes} {...rest}>
                {children ?? ""}
            </a>
        </li>
    );
}
