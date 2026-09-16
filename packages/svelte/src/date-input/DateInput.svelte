<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-date-input", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
