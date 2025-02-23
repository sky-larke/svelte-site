<script lang="ts">
  let { name = "", icon, link = "#", tech = [], topics = [] } = $props();

  import Underline from "$lib/components/utils/underlineanim.svelte";
  import FileTags from "$lib/components/utils/FileTags.svelte";

  import MdiFile from "~icons/mdi/file?raw";
  import SvelteFill from "~icons/ri/svelte-fill?raw";
  import SearchIcon from "~icons/material-symbols/search?raw";
  import GamePad from "~icons/mdi/gamepad-variant?raw";
  import ChemQuest from "~icons/mingcute/magic-hat-fill?raw";
  import Gem from "~icons/hugeicons/gem?raw";
  import Tree from "~icons/mdi/pine-tree?raw";

  const iconMap: Record<string, any> = {
    svelte: SvelteFill,
    search: SearchIcon,
    gamepad: GamePad,
    magic: ChemQuest,
    gem: Gem,
    tree: Tree,
  };

  let currentIcon = icon != null ? iconMap[icon] : MdiFile;

  import { slide } from "svelte/transition";

  let animation = $state("none");

  let isHovered = $state(false);
  const handleMouseOver = () => {
    if (animation == "none") {
      isHovered = true;
    }
  };

  const handleMouseLeave = () => {
    if (animation == "none") {
      isHovered = false;
    }
  };
</script>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<div
  class="flex items-center gap-1 py-1 text-primary-900"
  role="button"
  tabindex="0"
  aria-label="file"
  onmouseover={handleMouseOver}
  onmouseleave={handleMouseLeave}
  onfocusin={handleMouseOver}
  onfocusout={handleMouseLeave}
>
  <span class="flex w-fit z-10 text-warning-300 leading-none">
    {@html currentIcon}
  </span>

  <div class="flex flex-row align-items">
    <Underline>
      {#if name == "this site"}
        <a href={link} target="_blank" rel="noopener noreferrer">
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
    {#if isHovered}
      <span transition:slide={{ delay: 200, duration: 300, axis: "x" }}>
        <FileTags {tech} {topics} />
      </span>
    {/if}
  </div>
</div>

<style lang="postcss">
  span {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 13px;
  }

  a {
    @apply text-sm no-underline text-primary-900 hover:text-primary-600;
  }
</style>
