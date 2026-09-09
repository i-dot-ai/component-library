<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { subtle = false, error = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-select",
            subtle ? "govuk-select--subtle" : "",
            error ? "govuk-select--error" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<select class={classes} {...rest}>
    {@render children?.()}
</select>
