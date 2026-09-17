<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-summary-card__action", className].filter(Boolean).join(" "));
</script>

<li class={classes} {...rest}>
    {@render children?.()}
</li>
