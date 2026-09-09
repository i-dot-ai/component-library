<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-cookie-banner", className].filter(Boolean).join(" "));
</script>

<div class={classes} data-nosnippet="" role="region" aria-label="Cookie banner" {...rest}>
    {@render children?.()}
</div>
