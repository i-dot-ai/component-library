<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-phase-banner govuk-width-container", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    <p class="govuk-phase-banner__content">
        {@render children?.()}
    </p>
</div>
