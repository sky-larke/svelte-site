<script>
    import Folder from "./Folder.svelte";
    import File from "./File.svelte";
  
    let root = [
      {
        type: "folder",
        name: "featured",
        files: [{ type: "file", name: "index.ts" }],
        expanded: true,
      },
      {
        type: "folder",
        name: "games",
        files: [{ type: "file", name: "index.ts" }],
      },
      {
        type: "folder",
        name: "frontend",
        files: [{ type: "file", name: "index.ts" }],
        expanded: true,
      },
      
    ];
  </script>
  
 

    <Folder name="projects" files={root} expanded />
    <File name="about"/>

  