<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { noUnderline = false, noVisitedState = false, variant, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-link",
            noUnderline ? "govuk-link--no-underline" : "",
            noVisitedState ? "govuk-link--no-visited-state" : "",
            ({ "warning": "govuk-link--warning", "inverse": "govuk-link--inverse" }[variant] ?? ""),
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<a class={classes} {...rest}>
    {@render children?.()}
</a>
