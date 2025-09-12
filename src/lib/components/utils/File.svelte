<script lang="ts">
  let { name = "", icon, link = "#", tech = [], topics = [], subtitle=""} = $props();

  import Underline from "$lib/components/utils/underlineanim.svelte";
  import FileTags from "$lib/components/utils/FileTags.svelte";

  import MdiFile from "~icons/mdi/file?raw";
  import SvelteFill from "~icons/ri/svelte-fill?raw";
  import SearchIcon from "~icons/material-symbols/search?raw";
  import GamePad from "~icons/mdi/gamepad-variant?raw";
  import ChemQuest from "~icons/mingcute/magic-hat-fill?raw";
  import Gem from "~icons/hugeicons/gem?raw";
  import Tree from "~icons/mdi/pine-tree?raw";
  import Person from "~icons/material-symbols/person?raw";
  import Tea from '~icons/mdi/tea?raw';
  import LinkedInIcon from '~icons/mdi/linkedin?raw';

  const iconMap: Record<string, any> = {
    svelte: SvelteFill,
    search: SearchIcon,
    gamepad: GamePad,
    magic: ChemQuest,
    gem: Gem,
    tree: Tree,
    me: Person,
    tea: Tea,
    li: LinkedInIcon,
  };

  let currentIcon = icon != null ? iconMap[icon] : MdiFile;

  const colorMap: Record<string, any> = {
    purple: "text-primary-500",
    blue: "text-success-500",
    green: "text-tertiary-500",
    pink: "text-warning-300",
    salmon: "text-error-400",
  };

  let currentColor = icon == "li" ? colorMap["blue"] : colorMap["pink"];

  import { slide } from "svelte/transition";

  let animation = $state("none"); 
  // TODO: Make this work so animation plays completely

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
  

  <div class="flex group items-center gap-2">
    <div class="flex flex-col">
    <span class="flex flex-row gap-2">
    <span class="flex w-fit z-10 {currentColor} leading-none">
      {@html currentIcon}
    </span>
    <Underline>
      {#if name == "this site" || name == "my work"}
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
    </span>
    <!-- TODO: Fix this, wrap, mobile -->
    <!-- {#if isHovered && subtitle != ""}
    <div transition:slide={{ duration: 300 }} class="text-wrap">
      : {subtitle}
    </div>
    {/if} -->
      {#if isHovered}
      <ul
      transition:slide={{ duration: 300 }}
      class="border-none"
      >
        <span transition:slide={{ delay: 200, duration: 300, axis: "x" }} class="">
          <FileTags {tech} {topics} />
        </span>
      </ul>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  div {
    @apply text-sm
  }
  span {
    @apply flex items-center 
  }

  a {
    @apply text-sm no-underline text-primary-900 hover:text-primary-600;
  }
  ul {
    @apply pt-[0.2em] pl-1 ml-2.5 list-none border-l-2 border-l-primary-400
  }
</style>
