<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-task-list__status", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    {@render children?.()}
</div>
