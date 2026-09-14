<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { width = "2", class: className = "", ...rest } = $props();

    let classes = $derived(
        [
            "govuk-input govuk-date-input__input",
            ({ "2": "govuk-input--width-2", "3": "govuk-input--width-3", "4": "govuk-input--width-4" }[width] ?? ""),
            className,
        ]
            .filter(Boolean)
            .join(" "),
    );
</script>

<input class={classes} type="text" inputmode="numeric" {...rest} />
