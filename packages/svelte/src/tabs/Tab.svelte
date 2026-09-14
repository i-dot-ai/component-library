<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { selected = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-tabs__tab", className].filter(Boolean).join(" "));
</script>

<li class={["govuk-tabs__list-item", selected ? "govuk-tabs__list-item--selected" : ""].filter(Boolean).join(" ")}>
    <a class={classes} {...rest}>
        {@render children?.()}
    </a>
</li>
