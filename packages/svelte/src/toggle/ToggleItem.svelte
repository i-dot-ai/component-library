<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["iai-toggle__item", className].filter(Boolean).join(" "));
</script>

<div class={classes} data-module="govuk-toggle" {...rest}>
    {@render children?.()}
</div>
