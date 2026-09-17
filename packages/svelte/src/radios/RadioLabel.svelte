<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-label govuk-radios__label", className].filter(Boolean).join(" "));
</script>

<label class={classes} {...rest}>
    {@render children?.()}
</label>
