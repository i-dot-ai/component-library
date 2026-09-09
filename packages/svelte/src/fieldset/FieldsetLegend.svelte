<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { size, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-fieldset__legend",
            ({ "small": "govuk-fieldset__legend--s", "medium": "govuk-fieldset__legend--m", "large": "govuk-fieldset__legend--l", "xl": "govuk-fieldset__legend--xl" }[size] ?? ""),
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<legend class={classes} {...rest}>
    {@render children?.()}
</legend>
