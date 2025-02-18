
<script lang="ts">
    import Hero from "$lib/components/Hero.svelte"
    import RootHeader from "$lib/components/RootHeader.svelte"

    /** @type {import('./$types').PageProps} */
	let { hierarchy } = $props();

</script>

<RootHeader />
    <main class="content 
        sm:mx-12 mx-3 ">
        <Hero {hierarchy}/>
    </main>
















