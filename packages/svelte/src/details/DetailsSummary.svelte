<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-details__summary", className].filter(Boolean).join(" "));
</script>

<summary class={classes} {...rest}>
    <span class="govuk-details__summary-text">
        {@render children?.()}
    </span>
</summary>
