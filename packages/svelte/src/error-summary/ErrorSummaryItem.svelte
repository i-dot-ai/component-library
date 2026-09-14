<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["", className].filter(Boolean).join(" "));
</script>

<li>
    <a class={classes} {...rest}>
        {@render children?.()}
    </a>
</li>
