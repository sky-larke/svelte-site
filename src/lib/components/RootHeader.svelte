<script lang="ts">
  import { AppBar } from '@skeletonlabs/skeleton'  
  import Socials from '$lib/components/socials.svelte'  
  import Mobile from '$lib/components/utils/mobile.svelte'
  import Desktop from '$lib/components/utils/desktop.svelte'
</script>

<AppBar 
  gridColumns="grid-cols-3"
  slotDefault="place-self-center"
  slotTrail="place-content-end"
  background="bg-primary-600/10" 
  class="border-b-2 border-secondary-500/50 dark:border-primary-100/50
  py-1 pl-4 pr-4 relative flex justify-between"
  >
  <svelte:fragment slot="lead">~</svelte:fragment>
  <Mobile>
      <Socials></Socials>
  </Mobile>

  <svelte:fragment slot="trail">
  <Desktop>
      <Socials></Socials>
  </Desktop>
  </svelte:fragment>
</AppBar>
