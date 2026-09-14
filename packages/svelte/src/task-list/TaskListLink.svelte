<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-link govuk-task-list__link", className].filter(Boolean).join(" "));
</script>

<a class={classes} {...rest}>
    {@render children?.()}
</a>
