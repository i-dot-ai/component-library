<script>
    let { ariaLabel = "Language", class: className = "", children, ...rest } = $props();

    let classes = $derived(
        ["govuk-language-navigation", className].filter(Boolean).join(" "),
    );
</script>

<nav class={classes} aria-label={ariaLabel} {...rest}>
    <ul class="govuk-language-navigation__list">
        {@render children?.()}
    </ul>
</nav>
