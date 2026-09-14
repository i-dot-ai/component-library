<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-skip-link", className].filter(Boolean).join(" "));
</script>

<a class={classes} data-module="govuk-skip-link" {...rest}>
    {@render children?.()}
</a>
