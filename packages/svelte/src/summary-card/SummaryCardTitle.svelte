<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-summary-card__title", className].filter(Boolean).join(" "));
</script>

<h2 class={classes} {...rest}>
    {@render children?.()}
</h2>
