<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-warning-text", className].filter(Boolean).join(" "));
</script>

<div class={classes} {...rest}>
    <span class="govuk-warning-text__icon" aria-hidden="true">
        !
    </span>
    <strong class="govuk-warning-text__text">
        <span class="govuk-visually-hidden">
            Warning
        </span>
        {@render children?.()}
    </strong>
</div>
