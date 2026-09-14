<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { href, class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-service-navigation__item", className].filter(Boolean).join(" "));
</script>

<li class={classes} {...rest}>
    <a class="govuk-service-navigation__link" href={href}>
        {@render children?.()}
    </a>
</li>
