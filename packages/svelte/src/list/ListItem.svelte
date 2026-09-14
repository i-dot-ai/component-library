<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-list-item", className].filter(Boolean).join(" "));
</script>

<li class={classes} {...rest}>
    {@render children?.()}
</li>
