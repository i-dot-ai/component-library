<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["side-nav", className].filter(Boolean).join(" "));
</script>

<nav class={classes} {...rest}>
    {@render children?.()}
</nav>
