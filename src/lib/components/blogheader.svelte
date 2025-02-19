<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton'  
    export let breadcrumbs: { label: string, link: string }[] = [];
  </script>

<style lang="postcss">
    img {
    @apply h-6 w-6;  /* Set the height and width for images */
  }
</style>

<AppBar 
    background="bg-primary-600/10" 
    class="absolute w-full
    border-b-2 border-surface-400/50 dark:border-primary-100/50
    py-1 flex-start justify-between"
    >
    
    <svelte:fragment slot="lead">
        <ol class="breadcrumb">     
            <li class="crumb">
                <a href="/" class="anchor"><img 
                    src="/assets/icon_360.png" 
                    alt="pixel portrait icon" 
                    class="rounded-sm
                    border-1 border-secondary-500 dark:border-primary-100/50"
                    /></a>
            </li>
                {#each breadcrumbs as crumb, i}
                <li class="crumb-separator" aria-hidden="true" >/</li>
                
                {#if i==breadcrumbs.length-1}
                <li class="crumb font-semibold">{crumb.label}</li>
                
                {:else}
                <li class="crumb">
                    {crumb.label}</li>
                {/if}
            {/each}
        </ol>
    </svelte:fragment>
        
    

    <svelte:fragment slot="trail">
    
    </svelte:fragment>
</AppBar>
