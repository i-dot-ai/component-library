<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-task-list__name-and-hint", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
