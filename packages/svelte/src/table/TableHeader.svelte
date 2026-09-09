<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { numeric = false, class: className = "", children, ...rest } = $props();

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

<th class={classes} scope="col" {...rest}>
    {@render children?.()}
</th>
