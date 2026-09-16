<script>
    let { secondary = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "iai-card",
            secondary ? "iai-card--secondary" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
