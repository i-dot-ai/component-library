<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-error-summary__body", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
