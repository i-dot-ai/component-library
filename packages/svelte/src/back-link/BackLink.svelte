<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { inverse = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-back-link",
            inverse ? "govuk-back-link--inverse" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<a class={classes} {...rest}>
    {@render children?.()}
</a>
