<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-error-summary", className].filter(Boolean).join(" "));
</script>

<div class={classes} data-module="govuk-error-summary" {...rest}>
    <div role="alert">
        {@render children?.()}
    </div>
</div>
