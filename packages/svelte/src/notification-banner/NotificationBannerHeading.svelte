<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-notification-banner__heading", className].filter(Boolean).join(" "));
</script>

<p class={classes} {...rest}>
    {@render children?.()}
</p>
