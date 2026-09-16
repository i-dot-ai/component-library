<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-task-list", className].filter(Boolean).join(" "));
</script>

<ul class={classes} {...rest}>
    {@render children?.()}
</ul>
