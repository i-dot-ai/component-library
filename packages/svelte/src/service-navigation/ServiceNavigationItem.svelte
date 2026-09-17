<script>
    let { href, current = false, active = false, class: className = "", children, ...rest } = $props();

    let isActive = $derived(current || active);
    let classes = $derived(
        [
            "govuk-service-navigation__item",
            isActive ? "govuk-service-navigation__item--active" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
    let ariaCurrent = $derived(current ? "page" : active ? "true" : undefined);
</script>

<li class={classes}>
    {#if href !== undefined}
        <a class="govuk-service-navigation__link" {href} aria-current={ariaCurrent} {...rest}>
            {#if isActive}<strong class="govuk-service-navigation__active-fallback">{@render children?.()}</strong>{:else}{@render children?.()}{/if}
        </a>
    {:else}
        <span class="govuk-service-navigation__text" aria-current={ariaCurrent} {...rest}>
            {#if isActive}<strong class="govuk-service-navigation__active-fallback">{@render children?.()}</strong>{:else}{@render children?.()}{/if}
        </span>
    {/if}
</li>
