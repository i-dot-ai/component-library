<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-notification-banner__header", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
