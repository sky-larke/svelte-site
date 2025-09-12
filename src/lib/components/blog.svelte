<script lang="ts">
    import Time from "svelte-time";
    import Tags from "$lib/components/tags.svelte";
    import { _page, _lastVisited} from "../../routes/+page";

    export let title: string = "";
    export let subtitle: string = "";
    export let date: Date = new Date();
    export let tech: string[] = [];
    export let topics: string[] = [];
    export let thumbnail: string = "";
    export let path: string = "";
    export let parent: string = "";

    $:_lastVisited.set(parent);
    $:_page.set(title);

    let chemQuest = 
        title === "ChemQuest" ? "font-size: 50px; font-family: 'Unica One', serif;" : "";
</script>

<svelte:head>
    <title>{title} | Erin Park's Personal Site</title>
    <meta
        name="description"
        content="A blog post about my {title} project. Involves topics such as: {tech}, {topics}"
    />

    <!-- Add other head elements like meta tags, CSS, etc. -->
</svelte:head>

<main
    class="flex flex-col flex-grow content
        max-h-[90vh] pb-20 gap-[1em]
        sm:mx-[6em] mx-10 overflow-y-auto overflow-x-hidden no-scrollbar"
>
    <div class="flex flex-col items-center">
        <h1 class="mt-16" style={chemQuest}>
            {title === "ChemQuest" ? "ChemQuesT" : title}
        </h1>
        <span class="subheading">
            {#if subtitle != ""}
                {subtitle} · <Time timestamp={date} />
            {:else}
                <Time timestamp={date} />
            {/if}
        </span>
        <Tags {tech} {topics} />
        {#if thumbnail}
            <img src="{path}/{thumbnail}" alt="thumbnail for {title}" />
        {/if}
    </div>
    <slot />
</main>

<style lang="postcss">
    h1 {
        @apply pb-2 font-semibold;
    }
    .subheading {
        @apply font-semibold text-primary-600 text-center;
    }

</style>
