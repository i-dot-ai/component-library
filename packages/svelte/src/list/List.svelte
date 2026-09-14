<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { spaced = false, numbered, class: className = "", children, ...rest } = $props();
</script>

{#if numbered}
<ol class={["govuk-list govuk-list--number", spaced ? "govuk-list--spaced" : "", className].filter(Boolean).join(" ")} {...rest}>
    {@render children?.()}
</ol>
{:else}
<ul class={["govuk-list", spaced ? "govuk-list--spaced" : "", className].filter(Boolean).join(" ")} {...rest}>
    {@render children?.()}
</ul>
{/if}
