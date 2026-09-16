<script>
    let { href, class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-breadcrumbs__list-item", className].filter(Boolean).join(" "));
</script>

<li class={classes} {...rest}>
    <a class="govuk-breadcrumbs__link" href={href}>
        {@render children?.()}
    </a>
</li>
