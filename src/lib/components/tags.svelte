<script lang="ts">
    export let tags;
</script>

<div
class="flex flex-row space-x-1 py-3"
>
{#each tags as tag}
    <span class="badge variant-filled-secondary text-primary-900">{tag}</span>
{/each}
</div>

