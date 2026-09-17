<script>
    let { hidden = true, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-checkboxes__conditional",
            hidden ? "govuk-checkboxes__conditional--hidden" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
