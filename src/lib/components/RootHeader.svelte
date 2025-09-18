<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton";
  import Socials from "$lib/components/socials.svelte";
  import Mobile from "$lib/components/utils/mobile.svelte";
</script>

<AppBar
  gridColumns="grid-cols-3"
  slotLead="font-bold"
  slotDefault="place-self-center"
  slotTrail="place-content-end"
  background="bg-primary-600/0"
  class="
    py-1 flex-start justify-between"
>
  <svelte:fragment slot="lead">~</svelte:fragment>

</AppBar>
