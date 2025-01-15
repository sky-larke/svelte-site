<script lang="ts">
  import { LightSwitch, AppBar } from '@skeletonlabs/skeleton';
	
</script>

<AppBar background="bg-error-300" class="pl-1 pr-1 relative">
  <svelte:fragment slot="lead"><img src="assets/icon_360.png" alt="icon" class="fixed left-[9vw] z-50"/></svelte:fragment>
  <svelte:fragment slot="trail"><LightSwitch class="fixed right-[9vw]"></LightSwitch></svelte:fragment>
</AppBar>
