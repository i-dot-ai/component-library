<script>
    let { class: className = "", value, ...rest } = $props();

    let classes = $derived(
        ["govuk-textarea govuk-js-character-count", className]
            .filter(Boolean)
            .join(" "),
    );
</script>

<textarea class={classes} {...rest}>{value ?? ""}</textarea>
