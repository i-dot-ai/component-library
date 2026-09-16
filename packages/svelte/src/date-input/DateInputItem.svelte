<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-date-input__item", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
