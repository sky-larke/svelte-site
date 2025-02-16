<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton'  
    export let breadcrumbs: { label: string, link: string }[] = [];
  </script>

<AppBar 
    background="bg-primary-600/10" 
    class="border-b-2 border-secondary-500/50 dark:border-primary-100/50
        py-1 px-4 relative flex justify-between"
    >
    
    <svelte:fragment slot="lead">
        <ol class="breadcrumb">     
            <li class="crumb">
                <a href="/" class="anchor"><img 
                    src="assets/icon_360.png" 
                    alt="pixel portrait icon" 
                    class="rounded-sm
                    border-1 border-secondary-500 dark:border-primary-100/50"
                    /></a>
            </li>
                {#each breadcrumbs as crumb, i}
                <li class="crumb-separator" aria-hidden="true" >/</li>
                
                {#if i>0}
                <li class="crumb">
                    <a class="anchor" href={crumb.link}>{crumb.label}</a></li>
                {:else}
                    <li class="crumb">{crumb.label}</li>
                {/if}
            {/each}
        </ol>
    </svelte:fragment>
        
    

    <svelte:fragment slot="trail">
    
    </svelte:fragment>
</AppBar>
