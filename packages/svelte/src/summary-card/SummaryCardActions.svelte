<script>
    let { single = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-summary-card__actions", className].filter(Boolean).join(" "));
</script>

{#if single}
    <div class={classes} {...rest}>
        {@render children?.()}
    </div>
{:else}
    <ul class={classes} {...rest}>
        {@render children?.()}
    </ul>
{/if}
