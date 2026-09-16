<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-cookie-banner__content", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
