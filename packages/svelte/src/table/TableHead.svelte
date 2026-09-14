<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-table__head", className].filter(Boolean).join(" "));
</script>

<thead class={classes} {...rest}>
    {@render children?.()}
</thead>
