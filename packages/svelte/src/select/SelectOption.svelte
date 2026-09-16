<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["", className].filter(Boolean).join(" "));
</script>

<option class={classes} {...rest}>
    {@render children?.()}
</option>
