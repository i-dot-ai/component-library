// AUTO-GENERATED from HTML spec. Do not edit by hand.

type FileUploadProps = {
    class?: string;
    [key: string]: unknown;
};

export default function FileUpload({ class: className, ...rest }: FileUploadProps) {
    const classes = ["govuk-file-upload", className ?? ""].filter(Boolean).join(" ");

    return (
        <input className={classes} type="file" {...rest} />
    );
}
