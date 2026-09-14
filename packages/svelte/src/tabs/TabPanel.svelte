<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { hidden = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-tabs__panel",
            hidden ? "govuk-tabs__panel--hidden" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
