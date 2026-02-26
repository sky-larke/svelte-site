<script lang="ts">
  import Folder from "$lib/components/utils/Folder.svelte";
  import File from "$lib/components/utils/File.svelte";
  import { _homePage } from "../../routes/+page";
  import { onMount } from "svelte";
  let hierarchy: any = [];
  let education: any = [{
        "type": "file",
        "name": "Northwestern University",
        "subtitle": "Bachelor of Science in Computer Science",
        "date": "2026-06-02T00:00:00.00Z",
        "link": "",
        "icon": "northwestern",
        "tech": [],
        "topics": [],
        "parent": ""
      }, 
      {
          "type": "file",
          "name": "Relevant Coursework",
          "subtitle": "Compilers, Operating Systems, Parallel Systems, Distributed Systems, Networking, Programming Languages, Artificial Intelligence, Machine Learning, Data Structures & Algorithms",
          "date": "",
          "link": "",
          "icon": null,
          "tech": [],
          "topics": [],
          "parent": ""
        }];
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

  let siteTags = ["SvelteKit", "TypeScript"];
</script>

<div class="pb-2 font-bold">Ask me about...</div>
<Folder name="education" files={education} expanded={true}></Folder>
<Folder name="projects" files={hierarchy} expanded/>
<File
  name="work"
  icon="li"
  link="https://www.linkedin.com/in/erin--park/"
  subtitle=""
/>
