<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { sideNav = false, inverse = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-service-navigation",
            sideNav ? "govuk-service-navigation--side-nav" : "",
            inverse ? "govuk-service-navigation--inverse" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} data-module="govuk-service-navigation" {...rest}>
    <div class="govuk-width-container">
        <div class="govuk-service-navigation__container">
            <nav class="govuk-service-navigation__wrapper" aria-label="Menu">
                <ul class="govuk-service-navigation__list" id="navigation">
                    {@render children?.()}
                </ul>
            </nav>
        </div>
    </div>
</div>
