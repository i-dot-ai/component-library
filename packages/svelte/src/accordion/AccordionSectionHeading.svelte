<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-accordion__section-button", className].filter(Boolean).join(" "));
</script>

<h2 class="govuk-accordion__section-heading">
    <span class={classes} {...rest}>
        {@render children?.()}
    </span>
</h2>
