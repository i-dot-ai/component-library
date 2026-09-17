<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-panel",
            className.includes("govuk-panel--interruption") ? "" : "govuk-panel--confirmation",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
