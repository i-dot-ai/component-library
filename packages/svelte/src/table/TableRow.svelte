<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-table__row", className].filter(Boolean).join(" "));
</script>

<tr class={classes} {...rest}>
    {@render children?.()}
</tr>
