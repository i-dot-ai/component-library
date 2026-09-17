import { ReactNode } from 'react';

type CharacterCountProps = {
    class?: string;
    children?: ReactNode;
    [key: string]: unknown;
};

export default function CharacterCount({ class: className, children, ...rest }: CharacterCountProps) {
    const classes = ["govuk-textarea govuk-js-character-count", className ?? ""].filter(Boolean).join(" ");

    return (
        <textarea className={classes} {...rest}>{children ?? ""}</textarea>
    );
}
