<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-radios__item", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
