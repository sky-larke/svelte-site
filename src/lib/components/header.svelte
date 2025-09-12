<script lang=ts>
    import { page } from '$app/state'
    import { onMount } from 'svelte';
    import RootHeader from '$lib/components/RootHeader.svelte';
    import BlogHeader from '$lib/components/blogheader.svelte';
    
    let title:string ="";
    let breadcrumbs:any;

    onMount(() => {
        title = localStorage.getItem('page') ?? title;
        breadcrumbs = [
            { label: "Projects", link: "" },
            { label: title, link: "" },
        ];
    });


</script>


<div class="absolute w-full h-min-[2em]
    bg-primary-200 shadow z-20">
{#if page.url.pathname === "/"}
    <RootHeader />
{:else}
    <BlogHeader {breadcrumbs}/>
{/if}
</div>