<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { href, class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-generic-header", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    <div class="govuk-generic-header__container govuk-width-container">
        <div class="govuk-generic-header__logo">
            <a class="govuk-generic-header__homepage-link" href={href}>
                {@render children?.()}
            </a>
        </div>
    </div>
</div>
