<script>
    let { class: className = "", ...rest } = $props();

    let classes = $derived(
        ["govuk-file-upload", className].filter(Boolean).join(" "),
    );
</script>

<input class={classes} type="file" {...rest} />
