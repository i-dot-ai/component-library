// AUTO-GENERATED from HTML spec. Do not edit by hand.

type TaskListLinkProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function TaskListLink({ class: className, children, ...rest }: TaskListLinkProps) {
    const classes = ["govuk-link govuk-task-list__link", className ?? ""].filter(Boolean).join(" ");

    return (
        <a className={classes} {...rest}>
            {children ?? ""}
        </a>
    );
}
