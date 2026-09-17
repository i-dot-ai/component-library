<script>
    let {
        heading = "Pages in this section",
        headingId = "contents-panel-heading",
        class: className = "",
        children,
        ...rest
    } = $props();

    let classes = $derived(
        ["contents-panel", className].filter(Boolean).join(" "),
    );
</script>

<nav class={classes} aria-labelledby={headingId} {...rest}>
    <h2 class="govuk-visually-hidden" id={headingId}>{heading}</h2>
    {@render children?.()}
</nav>
