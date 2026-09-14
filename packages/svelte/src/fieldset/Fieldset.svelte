<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-fieldset", className].filter(Boolean).join(" "));
</script>

<fieldset class={classes} {...rest}>
    {@render children?.()}
</fieldset>
