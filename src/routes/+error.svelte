<script lang="ts">
    import "../styles/tailwind.css"; // Import Tailwind CSS globally
    import Error from "$lib/components/404.svelte";
    import BlogHeader from "$lib/components/blogheader.svelte";
    const breadcrumbs = [{ label: "???", link: "#" }];
</script>

<BlogHeader {breadcrumbs} />

<Error />

<slot />
