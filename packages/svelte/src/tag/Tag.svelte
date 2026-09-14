<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { colour, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-tag",
            ({ "grey": "govuk-tag--grey", "green": "govuk-tag--green", "turquoise": "govuk-tag--turquoise", "blue": "govuk-tag--blue", "light-blue": "govuk-tag--light-blue", "purple": "govuk-tag--purple", "pink": "govuk-tag--pink", "red": "govuk-tag--red", "orange": "govuk-tag--orange", "yellow": "govuk-tag--yellow" }[colour] ?? ""),
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<strong class={classes} {...rest}>
    {@render children?.()}
</strong>
