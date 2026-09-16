<script>
    let { smallTextUntilTablet = false, subtle = false, summary = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-table",
            smallTextUntilTablet ? "govuk-table--small-text-until-tablet" : "",
            subtle ? "govuk-table--subtle" : "",
            summary ? "govuk-table--summary" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<table class={classes} {...rest}>
    {@render children?.()}
</table>
