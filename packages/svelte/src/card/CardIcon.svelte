<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["iai-card__icon", className].filter(Boolean).join(" "));
</script>

<div class={classes} aria-hidden="true" {...rest}>
    {@render children?.()}
</div>
