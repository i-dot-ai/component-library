<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { success, class: className = "", children, ...rest } = $props();
</script>

{#if success}
<div class={["govuk-notification-banner govuk-notification-banner--success", className].filter(Boolean).join(" ")} role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner" {...rest}>
    {@render children?.()}
</div>
{:else}
<div class={["govuk-notification-banner", className].filter(Boolean).join(" ")} role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner" {...rest}>
    {@render children?.()}
</div>
{/if}
