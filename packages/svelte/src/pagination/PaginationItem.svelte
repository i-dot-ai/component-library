<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { current = false, ellipsis, class: className = "", children, ...rest } = $props();
</script>

{#if ellipsis}
<li class="govuk-pagination__item govuk-pagination__item--ellipsis">
    {#if children}{@render children()}{:else}⋯{/if}
</li>
{:else}
<li class={["govuk-pagination__item", current ? "govuk-pagination__item--current" : ""].filter(Boolean).join(" ")}>
    <a class={["govuk-link govuk-pagination__link", className].filter(Boolean).join(" ")} {...rest}>
        {@render children?.()}
    </a>
</li>
{/if}
