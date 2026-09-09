<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { smallTextUntilTablet = false, subtle = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-table",
            smallTextUntilTablet ? "govuk-table--small-text-until-tablet" : "",
            subtle ? "govuk-table--subtle" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<table class={classes} {...rest}>
    {@render children?.()}
</table>
