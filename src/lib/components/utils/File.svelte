<script lang="ts">
  import MdiFile from "~icons/mdi/file?raw";
  let { name = "", icon, link = "#" } = $props();
  import Underline from "$lib/components/utils/underlineanim.svelte";
  
  import SvelteFill from "~icons/ri/svelte-fill?raw";
  import SearchIcon from "~icons/material-symbols/search?raw";
  import GamePad from "~icons/mdi/gamepad-variant?raw";
  import ChemQuest from "~icons/mingcute/magic-hat-fill?raw";
  import Gem from "~icons/hugeicons/gem?raw";
  import Tree from "~icons/mdi/pine-tree?raw";

  const iconMap: Record<string, any> = {
    "svelte": SvelteFill,
    "search": SearchIcon,
    "gamepad": GamePad,
    "magic": ChemQuest,
    "gem": Gem,
    "tree": Tree
  };

  let currentIcon = icon != null ? iconMap[icon] : MdiFile;

  console.log(name, currentIcon);
</script>

<span class=" w-fit z-10 text-warning-300">
  {@html currentIcon }
  <div class="flex items-center gap-1 text-primary-900">
    <Underline>
      {#if name == "this site"}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-row"
        >
          {name}
        </a>
      {:else if link != ""}
        <a href={link}>
          {name}
        </a>
      {:else}
        {name}
      {/if}
    </Underline>
  </div></span
>

<style lang="postcss">
  span {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 13px;
  }

  a {
    @apply no-underline text-primary-900 hover:text-primary-600;
  }
</style>
