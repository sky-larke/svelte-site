<script lang="ts">
    import Folder from "$lib/components/utils/Folder.svelte";
    import File from "$lib/components/utils/File.svelte";

    import SvelteFill from '~icons/ri/svelte-fill?raw';
    import SearchIcon from '~icons/material-symbols/search?raw';
    import GamePad from '~icons/mdi/gamepad-variant?raw';
    import ChemQuest from '~icons/mingcute/magic-hat-fill?raw';
    import Gem from '~icons/hugeicons/gem?raw';


    let { hierarchy = []} = $props();
  
    let root = [
      {
        type: "folder",
        name: "machinelearning",
        files: [
            
            { type: "file", name: "humanoidrobot" },
            { type: "file", name: "kaggle" }, 
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
            { type: "file", name: "distributedSystems" },
            { type: "file", name: "srsim", icon:GamePad},
            { type: "file", name: "f1telemetry" },
            { type: "file", name: "searchEngine", icon:SearchIcon }],
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
    console.log('Received hierarchy:', hierarchy);
  </script>

    <div class="pb-2">Ask me about...</div>
 
    <Folder name="my projects" files={root} expanded/>
    <File name="site source code" icon={SvelteFill} link="https://github.com/sky-larke/svelte-site"/>
    

  