<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["contents-panel__section", className].filter(Boolean).join(" "));
</script>

<ul class={classes} {...rest}>
    {@render children?.()}
</ul>
