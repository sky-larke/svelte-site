<script lang="ts">
    import { AppBar } from "@skeletonlabs/skeleton";
    export let breadcrumbs: { label: string; link: string }[] = [];
</script>

<AppBar
    background="bg-primary-600/10"
    class="absolute w-full
    border-b-2 border-surface-400/50
    py-1 flex-start justify-between z-50"
>
    <svelte:fragment slot="lead">
        <ol class="flex flex-wrap overflow-x-auto space-x-2">
            <li class="crumb">
                <a href="/" class="anchor"
                    ><img
                        src="/assets/icon_360.png"
                        alt="pixel portrait icon"
                        class="rounded-sm mx-2"
                    /></a
                >
            </li>
            {#each breadcrumbs as crumb, i}
                <li class="crumb-separator" aria-hidden="true">/</li>

                {#if i == breadcrumbs.length - 1}
                    <li class="crumb font-semibold">{crumb.label}</li>
                {:else}
                    <li class="crumb">
                        {crumb.label}
                    </li>
                {/if}
            {/each}
        </ol>
    </svelte:fragment>

    <svelte:fragment slot="trail"></svelte:fragment>
</AppBar>

<style lang="postcss">
    img {
        @apply h-6 w-6; /* Set the height and width for images */
    }
</style>
