<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["iai-card__heading", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
