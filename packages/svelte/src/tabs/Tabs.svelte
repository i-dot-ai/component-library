<!-- AUTO-GENERATED from HTML spec. Do not edit by hand. -->
<script>
    import { onMount } from "svelte";
    let node;
    onMount(() => {
        // Dynamic import keeps govuk-frontend out of SSR.
        void import("govuk-frontend").then(({ Tabs }) => {
            if (!node) return;
            if (node.hasAttribute(`data-${Tabs.moduleName}-init`)) return;
            new Tabs(node);
        });
    });
    let { class: className = "", children, ...rest } = $props();

    let classes = $derived(["govuk-tabs", className].filter(Boolean).join(" "));
</script>

<div class={classes} data-module="govuk-tabs" bind:this={node} {...rest}>
    {@render children?.()}
</div>
