<script lang="ts">
    import '../styles/tailwind.css';  // Import Tailwind CSS globally
    import Error from '$lib/components/404.svelte';
    import BlogHeader from "$lib/components/BlogHeader.svelte"
    const breadcrumbs = [{label:"???", link:"error"}];
</script>
<BlogHeader {breadcrumbs}/>

<Error />
  
<slot></slot>