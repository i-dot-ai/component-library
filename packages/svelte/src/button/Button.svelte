<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { secondary = false, warning = false, inverse = false, href, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-button",
            secondary ? "govuk-button--secondary" : "",
            warning ? "govuk-button--warning" : "",
            inverse ? "govuk-button--inverse" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

{#if href}
<a href={href} role="button" class={classes} {...rest}>
    {@render children?.()}
</a>
{:else}
<button class={classes} data-module="govuk-button" {...rest}>
    {@render children?.()}
</button>
{/if}
