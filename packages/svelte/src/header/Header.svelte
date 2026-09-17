<script>
    let { href, class: className = "", containerClasses = "", children, ...rest } = $props();

    let classes = $derived(["govuk-generic-header", className].filter(Boolean).join(" "));
    let container = $derived(["govuk-generic-header__container", containerClasses || "govuk-width-container"].join(" "));
</script>

<div class={classes} {...rest}>
    <div class={container}>
        <div class="govuk-generic-header__logo">
            <a class="govuk-generic-header__homepage-link" href={href}>
                {@render children?.()}
            </a>
        </div>
    </div>
</div>
