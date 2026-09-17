<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-panel__body", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
