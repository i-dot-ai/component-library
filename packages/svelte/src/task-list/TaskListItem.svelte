<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { withLink = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-task-list__item",
            withLink ? "govuk-task-list__item--with-link" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<li class={classes} {...rest}>
    {@render children?.()}
</li>
