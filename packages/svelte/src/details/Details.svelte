<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-details", className].filter(Boolean).join(" "));
</script>

<details class={classes} {...rest}>
    {@render children?.()}
</details>
