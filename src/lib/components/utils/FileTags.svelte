<script lang="ts">
    export let tech;
    export let topics;
    let all = tech.concat(topics);
    let techButton = "badge bg-success-500/60 text-success-900";
    let topicsButton = "badge bg-secondary-500/50";

    let tagLimit = 3;

    all = all.length > tagLimit ? all.slice(0, 3) : all;
</script>

<div class="flex flex-row pl-2 space-x-1 leading-none tags">
    {#each all as tag}
        <span
            class="badge {topics.includes(tag)
                ? topicsButton
                : techButton} text-primary-900">{tag}</span
        >
    {/each}
</div>

<style>
    .tags {
        opacity: 100%;
    }
    @media (max-width: 768px) {
        .tags {
            opacity: 0;
        }
    }
</style>
<!-- TODO: figure out how to handle mobile for this.  -->
