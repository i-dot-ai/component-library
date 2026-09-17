<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-panel__title", className].filter(Boolean).join(" "));
</script>

<h1 class={classes} {...rest}>
    {@render children?.()}
</h1>
