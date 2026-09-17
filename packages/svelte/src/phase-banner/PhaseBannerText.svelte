<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-phase-banner__text", className].filter(Boolean).join(" "));
</script>

<span class={classes} {...rest}>
    {@render children?.()}
</span>
