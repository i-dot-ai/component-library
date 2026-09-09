<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { noBorder = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-summary-list",
            noBorder ? "govuk-summary-list--no-border" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<dl class={classes} {...rest}>
    {@render children?.()}
</dl>
