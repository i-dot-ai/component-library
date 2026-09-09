<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { block = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-pagination",
            block ? "govuk-pagination--block" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<nav class={classes} aria-label="Pagination" {...rest}>
    {@render children?.()}
</nav>
