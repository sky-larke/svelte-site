<script lang="ts">
  import Folder from "$lib/components/utils/Folder.svelte";
  import File from "$lib/components/utils/File.svelte";

  import { onMount } from "svelte";
  let hierarchy: any = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const response = await fetch("projects.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      hierarchy = await response.json();
    } catch (e) {
      error = e;
    } finally {
      loading = false;
    }
  });
</script>

<div class="pb-2">Ask me about...</div>
<Folder name="my projects" files={hierarchy} expanded />
<File
  name="this site"
  icon="svelte"
  link="https://github.com/sky-larke/svelte-site"
/>
