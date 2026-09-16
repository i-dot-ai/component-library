<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-cookie-banner__message govuk-width-container", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
