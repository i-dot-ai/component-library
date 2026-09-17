<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-panel__actions", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
