<script lang="ts">
    import BlogHeader from '$lib/components/blogheader.svelte';
    import Time from "svelte-time";

    export let title:string = "";
    export let subtitle:string ="";
    export let date:Date = new Date();
    export let tags:string[] = [];
    
    let breadcrumbs=[{label: "Projects", link:""}, {label: title, link:""}];
</script>
<style lang="postcss">
    h1 {
        @apply sm:pt-8 pt-3 pb-2;
    }
    h2 {
        @apply pt-4;
    }
    h3 {
        @apply pt-4;
    }
    a {
        @apply anchor;
    }
</style>



<BlogHeader {breadcrumbs}/>
<main class="content mt-12 sm:mx-[10%] mx-10 overflow-y-auto overflow-x-hidden no-scrollbar
        sm:max-h-[80vh] max-h-[85vh] pb-20">
    <h1>{title}</h1>
    { #if subtitle != ""}
        <span class="font-semibold text-primary-600">{subtitle} · <Time timestamp={date}/></span>
    {:else}
        <Time timestamp={date}/>
    {/if}
    <p>{tags}</p>
    <slot></slot>
</main>