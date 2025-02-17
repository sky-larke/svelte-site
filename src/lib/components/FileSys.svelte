<script>
    import Folder from "$lib/components/utils/Folder.svelte";
    import File from "$lib/components/utils/File.svelte";

    import SvelteFill from '~icons/ri/svelte-fill?raw';
    import MdiUnity from '~icons/mdi/unity?raw';
    import SearchIcon from '~icons/material-symbols/search?raw';
    import GamePad from '~icons/mdi/gamepad-variant?raw';
    import ChemQuest from '~icons/mingcute/magic-hat-fill?raw';
    import Gem from '~icons/hugeicons/gem?raw';
  
    let root = [
      {
        type: "folder",
        name: "recent",
        files: [
            { type: "file", name: "distributedSystems" },
            { type: "file", name: "kaggle" }, 
            { type: "file", name: "searchEngine", icon:SearchIcon },
        ],
        expanded: true,
      },
      {
        type: "folder",
        name: "machinelearning",
        files: [
            
            { type: "file", name: "humanoidrobot" },
        ],
      },{
        type: "folder",
        name: "games",
        files: [
            { type: "file", name: "crystallarium", icon:Gem},
            { type: "file", name: "idolShowdown", icon:GamePad},
            { type: "file", name: "intervallic", icon:GamePad},
            { type: "file", name: "songly", icon:GamePad},
            { type: "file", name: "ChemQuest", icon:ChemQuest}
        ],
        expanded: false,
      },
      {
        type: "folder",
        name: "backend",
        files: [
            { type: "file", name: "srsim" },
            { type: "file", name: "f1telemetry" }],
        expanded: false,
      },
      {
        type: "folder",
        name: "design",
        files: [
          { type: "file", name: "forager" }, 
          { type: "file", name: "transportle" }],
        expanded: false,
      },
      
    ];
  </script>
    <p class="flex-row pb-2"><span class="text-primary-500">❯</span> ls</p>
 
    <Folder name="projects" files={root} expanded/>
    <File name="source code" icon={SvelteFill} link="https://github.com/sky-larke/svelte-site"/>
    

  