<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-list govuk-list--spaced", className].filter(Boolean).join(" "));
</script>

<ul class={classes} {...rest}>
    {@render children?.()}
</ul>
