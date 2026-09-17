<script>
    let {
        error = false,
        subtle = false,
        value = "",
        class: className = "",
        ...rest
    } = $props();

    let classes = $derived(
        [
            "govuk-textarea",
            error ? "govuk-textarea--error" : "",
            subtle ? "govuk-textarea--subtle" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<textarea class={classes} {...rest}>{value}</textarea>
