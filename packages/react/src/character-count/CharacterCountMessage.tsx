import { ReactNode } from 'react';

type CharacterCountMessageProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function CharacterCountMessage({ class: className, children, ...rest }: CharacterCountMessageProps) {
    const classes = ["govuk-hint govuk-character-count__message", className ?? ""].filter(Boolean).join(" ");

    return (
        <div className={classes} {...rest}>
            {children ?? ""}
        </div>
    );
}
