<script lang="ts">
    export let tech;
    export let topics;
    let all = tech.concat(topics);
    let techButton = "badge bg-secondary-500/70";
    let topicsButton = "badge bg-success-500/60";
</script>

<div class="flex flex-row space-x-1 py-3">
    {#each all as tag}
        <span
            class="badge {topics.includes(tag)
                ? topicsButton
                : techButton} text-primary-900">{tag}</span
        >
    {/each}
</div>
