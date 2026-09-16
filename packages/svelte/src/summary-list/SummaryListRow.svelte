<script>
    let { noActions = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-summary-list__row",
            noActions ? "govuk-summary-list__row--no-actions" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
