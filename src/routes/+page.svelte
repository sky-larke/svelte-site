
<script lang="ts">
    import Hero from "$lib/components/Hero.svelte"
    import RootHeader from "$lib/components/RootHeader.svelte"
    import FileSys from "$lib/components/FileSys.svelte"
    let projects = false;
</script>

<RootHeader />
    <main class="content 
        sm:py-12 p-3
        sm:mx-12 mx-3">
        {#if projects == false}
            <Hero />
            <slot></slot>
        {:else}
            <FileSys/>
        {/if}
    </main>
















