<script lang="ts">
    import MdiFile from '~icons/mdi/file?raw';
    let {name="", icon=MdiFile, link="#"} = $props();
    import Underline from "$lib/components/utils/underlineanim.svelte"
  </script>
  
  <span class=" w-fit z-10 text-warning-300">
    {@html icon}
    <div class="flex items-center gap-1 text-primary-900"><Underline>
      {#if name == "this site"}
      <a href={link} target="_blank" rel="noopener noreferrer" class="flex flex-row">
        {name}
        </a> 
      {:else if link != ""}
        <a href={link} >
        {name}
        </a>
      {:else}
        {name}
      {/if}
    </Underline></div></span
  >
  
  <style>
    span {
      display: flex;
      align-items: center;
      gap: 2px;
      font-size: 13px;
    }
  </style>
  