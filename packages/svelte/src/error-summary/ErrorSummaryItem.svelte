<script>
    let { href, class: className, children, ...rest } = $props();
</script>

<li>
    {#if href !== undefined}
        <a {href} class={className} {...rest}>{@render children?.()}</a>
    {:else}
        {@render children?.()}
    {/if}
</li>
