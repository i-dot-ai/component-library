<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children } = $props();

    let classes = $derived(["govuk-checkboxes__divider", className].filter(Boolean).join(" "));
</script>

<div class={classes}>
    {#if children}{@render children()}{:else}or{/if}
</div>
