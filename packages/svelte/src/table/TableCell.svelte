<script>
    let { numeric = false, stretch = false, noWrap = false, small = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-table__cell",
            numeric ? "govuk-table__cell--numeric" : "",
            stretch ? "govuk-table__cell--stretch" : "",
            noWrap ? "govuk-table__cell--no-wrap" : "",
            small ? "govuk-table__cell--small" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<td class={classes} {...rest}>
    {@render children?.()}
</td>
