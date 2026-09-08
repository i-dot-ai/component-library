<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-phase-banner", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    <p class="govuk-phase-banner__content">
        {@render children?.()}
    </p>
</div>
