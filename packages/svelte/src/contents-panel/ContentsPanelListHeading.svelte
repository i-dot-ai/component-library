<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["contents-panel__list-heading", className].filter(Boolean).join(" "));
</script>

<h3 class={classes} {...rest}>
    {@render children?.()}
</h3>
