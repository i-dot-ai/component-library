<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { size, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-label",
            ({ "small": "govuk-label--s", "medium": "govuk-label--m", "large": "govuk-label--l", "xl": "govuk-label--xl" }[size] ?? ""),
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<label class={classes} {...rest}>
    {@render children?.()}
</label>
