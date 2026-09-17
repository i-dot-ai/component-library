<script>
    let { hidden = true, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-radios__conditional",
            hidden ? "govuk-radios__conditional--hidden" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
