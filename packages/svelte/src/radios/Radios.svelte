<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { inline = false, small = false, class: className = "", children, ...rest } = $props();

    let classes = $derived(
        [
            "govuk-radios",
            inline ? "govuk-radios--inline" : "",
            small ? "govuk-radios--small" : "",
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<div class={classes} data-module="govuk-radios" {...rest}>
    {@render children?.()}
</div>
