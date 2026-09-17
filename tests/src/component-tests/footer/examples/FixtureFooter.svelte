<script>
    import { Footer } from "@i-dot-ai-npm/component-library-svelte";

    let { navigation, meta, contentLicence, copyright } = $props();
</script>

<Footer {navigation} {meta} {contentLicence} {copyright} />
