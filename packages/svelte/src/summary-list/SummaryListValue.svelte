<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-summary-list__value", className].filter(Boolean).join(" "));
</script>

<dd class={classes} {...rest}>
    {@render children?.()}
</dd>
