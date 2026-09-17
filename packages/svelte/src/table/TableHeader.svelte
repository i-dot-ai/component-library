<script>
    let { numeric = false, scope = "col", class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-table__header",
            numeric ? "govuk-table__header--numeric" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<th class={classes} {scope} {...rest}>
    {@render children?.()}
</th>
