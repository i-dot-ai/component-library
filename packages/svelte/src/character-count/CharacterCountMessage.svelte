<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-hint govuk-character-count__message", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
