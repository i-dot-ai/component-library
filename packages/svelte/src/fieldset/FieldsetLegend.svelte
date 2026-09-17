<script>
    let { size, isPageHeading, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-fieldset__legend",
            ({ "small": "govuk-fieldset__legend--s", "medium": "govuk-fieldset__legend--m", "large": "govuk-fieldset__legend--l", "xl": "govuk-fieldset__legend--xl" }[size] ?? ""),
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<legend class={classes} {...rest}>
    {#if isPageHeading}
        <h1 class="govuk-fieldset__heading">
            {@render children?.()}
        </h1>
    {:else}
        {@render children?.()}
    {/if}
</legend>
