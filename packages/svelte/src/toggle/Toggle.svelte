<script>
    let { class: className = "", ...rest } = $props();

    let classes = $derived(
        ["iai-toggle__input", className].filter(Boolean).join(" "),
    );
</script>

<input class={classes} type="checkbox" role="switch" {...rest} />
