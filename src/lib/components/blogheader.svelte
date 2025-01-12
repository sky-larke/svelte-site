<script lang="ts">
  import { LightSwitch, AppBar } from '@skeletonlabs/skeleton';
						
  // Reactive variable to track menu state
  let menuOpen = false;

  // Toggle menu function
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>



<AppBar padding='p-6'>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="trail"><LightSwitch></LightSwitch></svelte:fragment>
	<svelte:fragment slot="headline"><h1 class="h1">Headline</h1></svelte:fragment>
</AppBar>
