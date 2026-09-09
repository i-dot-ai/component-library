// AUTO-GENERATED from HTML spec. Do not edit by hand.

type PasswordInputProps = {
    class?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
};

export default function PasswordInput({ class: className, children, ...rest }: PasswordInputProps) {
    const classes = ["govuk-input govuk-password-input__input govuk-js-password-input-input", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className="govuk-input__wrapper govuk-password-input__wrapper">
            <input className={classes} type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none" {...rest} />
            <button className="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" type="button" data-module="govuk-button" aria-label="Show password" hidden="">
                {children ?? "Show"}
            </button>
        </div>
    );
}
