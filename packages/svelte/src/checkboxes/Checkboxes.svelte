<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { small = false, subtle = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-checkboxes",
            small ? "govuk-checkboxes--small" : "",
            subtle ? "govuk-checkboxes--subtle" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} data-module="govuk-checkboxes" {...rest}>
    {@render children?.()}
</div>
