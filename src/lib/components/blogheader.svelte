<script lang="ts">
  import { LightSwitch, AppBar } from '@skeletonlabs/skeleton';
						
  // Reactive variable to track menu state
  let menuOpen = false;

  // Toggle menu function
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>



<AppBar style="border-bottom: 1px solid white">
	<svelte:fragment slot="lead"><img src="assets/icon_360.png" alt="icon"/></svelte:fragment>
  Erin Park
	<svelte:fragment slot="trail"><LightSwitch></LightSwitch></svelte:fragment>
</AppBar>
