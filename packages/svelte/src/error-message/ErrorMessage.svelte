<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-error-message", className].filter(Boolean).join(" "));
</script>

<p class={classes} {...rest}>
    <span class="govuk-visually-hidden">
        Error:
    </span>
    {@render children?.()}
</p>
