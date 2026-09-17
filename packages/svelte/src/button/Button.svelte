<script>
    let { secondary = false, tertiary = false, warning = false, inverse = false, small = false, startButton = false, href, type, class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-button", secondary ? "govuk-button--secondary" : "", warning ? "govuk-button--warning" : "", inverse ? "govuk-button--inverse" : "", tertiary ? "govuk-button--tertiary" : "", small ? "govuk-button--small" : "", startButton ? "govuk-button--start" : "", className].filter(Boolean).join(" "));
</script>

{#snippet startIcon()}
<svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
</svg>
{/snippet}

{#if href}
<a {href} role="button" draggable="false" class={classes} data-module="govuk-button" {...rest}>
    {@render children?.()}
    {#if startButton}{@render startIcon()}{/if}
</a>
{:else}
<button type={type ?? "submit"} class={classes} data-module="govuk-button" {...rest}>
    {@render children?.()}
    {#if startButton}{@render startIcon()}{/if}
</button>
{/if}
