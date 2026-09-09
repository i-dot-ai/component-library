<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { inverse = false, collapseOnMobile = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-breadcrumbs",
            inverse ? "govuk-breadcrumbs--inverse" : "",
            collapseOnMobile ? "govuk-breadcrumbs--collapse-on-mobile" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<nav class={classes} aria-label="Breadcrumb" {...rest}>
    <ol class="govuk-breadcrumbs__list">
        {@render children?.()}
    </ol>
</nav>
