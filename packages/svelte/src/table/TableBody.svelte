<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-table__body", className].filter(Boolean).join(" "));
</script>

<tbody class={classes} {...rest}>
    {@render children?.()}
</tbody>
