<script>
    let { visuallyHiddenText = "Error", class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-error-message", className].filter(Boolean).join(" "));
</script>

<p class={classes} {...rest}>
    {#if visuallyHiddenText}<span class="govuk-visually-hidden">{visuallyHiddenText}:</span>{/if}
    {@render children?.()}
</p>
