<script lang="ts">
  import { LightSwitch, AppBar } from '@skeletonlabs/skeleton';
	
</script>
<header>
  <AppBar 
    gridColumns="grid-cols-[auto_1fr_auto]"
    slotLead="place-content-start" 
    slotTrail="place-content-end"
    background="bg-primary-600/10" 
    class="border-b-2 border-secondary-500/50 dark:border-primary-100/50
    py-1 pl-4 pr-4 relative flex justify-between"
    >
    <svelte:fragment slot="lead">
      <div class="flex items-center space-x-4">
        <img 
          src="assets/icon_360.png" 
          alt="pixel portrait icon" 
          class="rounded-md
          border-1 border-secondary-500 dark:border-primary-100/50
          hover:scale-110 focus:scale-110"
          />
        <p></p>
      </div>
    </svelte:fragment>
    
    <svelte:fragment slot="trail">
      <div class="flex items-center space-x-4">
        <LightSwitch></LightSwitch>
      </div>
    </svelte:fragment>
  </AppBar>
</header>
