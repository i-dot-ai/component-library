<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["iai-card__link", className].filter(Boolean).join(" "));
</script>

<a class={classes} {...rest}>
    {@render children?.()}
</a>
