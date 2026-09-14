<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { inline = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-form-group",
            inline ? "govuk-form-group--inline" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
