<script lang="ts">
  import File from "./File.svelte";
  import { slide } from "svelte/transition";
  import { _allOpened, _lastVisited } from "../../../routes/+page";
  import { get } from "svelte/store";

  import OpenFolder from "~icons/mdi/folder-open";
  import ClosedFolder from "~icons/mdi/folder";
  import Self from "./Folder.svelte";

  let { expanded = false, name = "", files = [] } = $props();

  expanded =
    get(_lastVisited) === name || get(_allOpened).includes(name) ? true : false;

  function toggle() {
    expanded = !expanded;
    get(_allOpened).includes(name)
      ? _allOpened.update((items) => items.filter((page) => page !== name))
      : ($_allOpened = [...$_allOpened, name]);
    _lastVisited.update(() => "");
  }
</script>

<div class="group z-10">
  <button onclick={toggle} class="font-medium text-success-500">
    {#if expanded}
      <OpenFolder />
    {:else}
      <ClosedFolder />
    {/if}
    <div
      class="flex items-center gap-1 text-primary-900
      hover:font-bold"
    >
      {name}
    </div>
  </button>

  {#if expanded}
    <ul
      transition:slide={{ duration: 300 }}
    >
      {#each files as file}
        {#if file.type === "folder"}
          <li><Self {...file} /></li>
        {:else if file.name}
          <li><File {...file} /></li>
        {/if}
      {/each}
    </ul>
  {/if}
</div>

<style lang="postcss">
  button {
    @apply items-center gap-3 bg-transparent bg-no-repeat bg-[length:1em_1em] border-none text-[14px] flex outline-none;
  }

  ul {
    @apply pt-[0.2em] pl-[0.5em] ml-[0.5em] list-none border-l-2 border-l-primary-400
  }

  li {
    @apply pt-[0.2em] px-[1px]
  }
</style>
