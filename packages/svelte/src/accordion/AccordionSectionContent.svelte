<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-accordion__section-content", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
