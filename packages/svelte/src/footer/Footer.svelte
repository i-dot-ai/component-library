<script>
    let {
        links,
        visuallyHiddenTitle = "Support links",
        containerClasses,
        class: className = "",
        children,
        ...rest
    } = $props();

    let classes = $derived(["govuk-footer", "iai-footer", className].filter(Boolean).join(" "));
    let containerClass = $derived(
        ["govuk-width-container", containerClasses ?? ""].filter(Boolean).join(" "),
    );
</script>

<div class={classes} {...rest}>
    <div class={containerClass}>
        <div class="govuk-footer__meta">
            <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
                <h2 class="govuk-visually-hidden">{visuallyHiddenTitle}</h2>
                {#if links && links.length > 0}
                    <ul class="govuk-footer__inline-list">
                        {#each links as link}
                            <li class="govuk-footer__inline-list-item">
                                <a class="govuk-footer__link" href={link.href} {...link.attributes ?? {}}>{link.text}</a>
                            </li>
                        {/each}
                    </ul>
                {/if}
                <div class="govuk-footer__meta-custom">
                    Built by the <a class="govuk-footer__link" href="https://ai.gov.uk/">Incubator for Artificial Intelligence</a>
                </div>
            </div>
            <div class="govuk-footer__meta-item">{@render children?.()}</div>
        </div>
    </div>
</div>
