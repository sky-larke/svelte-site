<script>
    import Folder from "./Folder.svelte";
    import File from "./File.svelte";
  
    let root = [
      {
        type: "folder",
        name: "current",
        files: [
            { type: "file", name: "distributed_systems" }
        ],
        expanded: true,
      },
      {
        type: "folder",
        name: "machinelearning",
        files: [
            { type: "file", name: "kaggle" }, 
            { type: "file", name: "humanoid_robot" },
        ],
      },{
        type: "folder",
        name: "games",
        files: [
            { type: "file", name: "crystallarium" },
            { type: "file", name: "idol_showdown" },
            { type: "file", name: "intervallic" },
            { type: "file", name: "songly" },
            { type: "file", name: "chemquest" },
        ],
        expanded: true,
      },
      {
        type: "folder",
        name: "backend",
        files: [
            { type: "file", name: "search_engine" },
            { type: "file", name: "srsim" },
            { type: "file", name: "f1_telemetry" }],
        expanded: true,
      },
      {
        type: "folder",
        name: "design",
        files: [
          { type: "file", name: "forager" }, 
          { type: "file", name: "transportle" }],
        expanded: true,
      },

      
    ];
  </script>
  
 

    <Folder name="projects" files={root} expanded />
    <File name="about"/>

  