<script lang="ts">
    export let tech;
    export let topics;
    let all = tech.concat(topics);
    let techButton = "badge bg-primary-300";
    let topicsButton = "badge bg-success-300";

    let tagLimit = 3;

    all = all.length > tagLimit ? all.slice(0, 3) : all;
</script>

<div class="flex flex-row pl-4 space-x-1 leading-none tags">
    {#each all as tag}
        <span
            class="badge {topics.includes(tag)
                ? topicsButton
                : techButton} text-primary-900 shadow">#{tag}</span
        >
    {/each}
</div>



