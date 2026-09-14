<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { size, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-table__caption",
            ({ "small": "govuk-table__caption--s", "medium": "govuk-table__caption--m", "large": "govuk-table__caption--l", "xl": "govuk-table__caption--xl" }[size] ?? ""),
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<caption class={classes} {...rest}>
    {@render children?.()}
</caption>
