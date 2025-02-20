<script lang="ts">
    import BlogHeader from "$lib/components/blogheader.svelte";
    import Time from "svelte-time";
    import Tags from "$lib/components/tags.svelte";

    export let title: string = "";
    export let subtitle: string = "";
    export let date: Date = new Date();
    export let tags: string[] = [];

    let breadcrumbs = [
        { label: "Projects", link: "" },
        { label: title, link: "" },
    ];
</script>

<div class="relative pb-[2em]">
    <BlogHeader {breadcrumbs} />
</div>

<main
    class="flex-col flex-grow content
        max-h-[90vh] pb-20 gap-[1em]
        sm:mx-[6em] mx-10 overflow-y-auto overflow-x-hidden no-scrollbar"
>
    <h1 class="mt-16">{title}</h1>
    <span class="subheading"
            >
    {#if subtitle != ""}
        {subtitle} · <Time timestamp={date} />
    {:else}
        <Time timestamp={date} />
    {/if}
    </span >
    <Tags {tags} />
    <slot></slot>
</main>

<style lang="postcss">
    h1 {
        @apply pb-2 font-semibold;
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
    .subheading {
        @apply font-semibold text-primary-600;
    }
    img {
        @apply py-4;
    }
</style>
