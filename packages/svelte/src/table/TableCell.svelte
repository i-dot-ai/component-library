<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { numeric = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-table__cell",
            numeric ? "govuk-table__cell--numeric" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<td class={classes} {...rest}>
    {@render children?.()}
</td>
