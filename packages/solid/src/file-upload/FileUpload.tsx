// AUTO-GENERATED from HTML spec. Do not edit by hand.
import { splitProps } from "solid-js";
import type { JSX } from "solid-js";

type FileUploadProps = {
    class?: string;
    [key: string]: unknown;
};

export default function FileUpload(props: FileUploadProps) {
    const [local, rest] = splitProps(props, ["class"]);
    const classes = () =>
        ["govuk-file-upload", local.class ?? ""].filter(Boolean).join(" ");

    return (
        <input class={classes()} type="file" {...rest} />
    );
}
