// AUTO-GENERATED from HTML spec. Do not edit by hand.

type ToggleProps = {
    class?: string;
    [key: string]: unknown;
};

export default function Toggle({ class: className, ...rest }: ToggleProps) {
    const classes = ["iai-toggle__input", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className="iai-toggle">
            <input className={classes} type="checkbox" {...rest} />
        </div>
    );
}
