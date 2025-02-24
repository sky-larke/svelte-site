<script lang="ts">
    export let tech;
    export let topics;
    let all = tech.concat(topics);
    let techButton = "badge bg-success-400";
    let topicsButton = "badge bg-secondary-400";
</script>

<div class="flex flex-row sm:justify-center space-x-1 py-3 overflow-x-auto w-full no-scrollbar ">
    {#each all as tag}
        <span
            class="badge {topics.includes(tag)
                ? topicsButton
                : techButton} text-primary-900">{tag}</span
        >
    {/each}
</div>
