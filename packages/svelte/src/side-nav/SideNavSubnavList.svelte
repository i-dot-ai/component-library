<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["side-nav__subnav-list", className].filter(Boolean).join(" "));
</script>

<ul class={classes} {...rest}>
    {@render children?.()}
</ul>
