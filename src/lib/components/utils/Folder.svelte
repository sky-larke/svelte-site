<script lang="ts">
  import File from "./File.svelte";
  import { slide } from "svelte/transition";

  import OpenFolder from "~icons/mdi/folder-open";
  import ClosedFolder from "~icons/mdi/folder";
  import Self from './Folder.svelte'

  let {expanded = false, name="", files = [], lastVisited =localStorage.getItem("lastVisited") ?? ""} = $props();
  expanded = lastVisited === name ? true : expanded;

  function toggle() {
    expanded = !expanded;
    localStorage.setItem("lastVisited", "");
    lastVisited = "";
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
      class="border-l-2 border-l-primary-400"
    >
      {#each files as file}
        <li>
          {#if file.type === "folder"}
            <Self {...file} />
          {:else}
            <File {...file} />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  button {
    /* background: url(/tutorial/icons/folder.svg) 0 0.1em no-repeat; */
    background-size: 1em 1em;
    border: none;
    font-size: 14px;
    display: flex;
    gap: 3px;
    align-items: center;
    outline: none;
    background: transparent no-repeat;
  }

  ul {
    padding: 0.2em 0 0 0.5em;
    margin: 0 0 0 0.5em;
    list-style: none;
  }

  li {
    padding: 0.2em 1px;
  }
</style>
