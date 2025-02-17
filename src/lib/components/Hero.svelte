
<script lang="ts">
    let name = "Erin Park"
    let title = "software engineer"
    let imgurl = "assets/icon.webp"
    let desc = "My main interests are in user-focused design, such as front-end development, UI/UX design, etc. I also have a game design hobby, due to enjoying creation of art, writing, and coding. I'm from Seattle, unless you're from Seattle, in which case I am actually from half an hour away."
    
    let defaultButton = "bg-primary-600/30 hover:bg-icon-pink focus-visible:bg-icon-pink"
    let customButton = "font-semibold hover:font-bold btn-sm flex-1 px-3 shadow shrink transition-all duration-200 ease-in-out transform hover:scale-110 focus-visible:scale-110"
    let toggleButton = "bg-icon-pink hover:bg-icon-pink focus-visible:bg-icon-pink"
    let projects = $state("home");
    import FileSys from "$lib/components/FileSys.svelte"
</script>

<div class="flex sm:items-start max-w-full rounded-lg flex-col 
    sm:flex-row sm:flex-grow-0 items-center
    mx-4em pt-10">

    <div class="flex flex-col items-center w-[60%] order-1 
        min-w-[30%]
        sm:min-w-[20%] sm:max-w-[40%] p-3 sm:pt-20">
      <img 
            src= {imgurl}
            alt="pixel portrait icon" 
            title="Made by me with Aseprite."
            class=" border-1 border-secondary-500/50 dark:border-primary-100/50
            sm:min-w-[50%] 
            min-w-[40%] h-auto sm-mb-4 mb-2
            flex-shrink-0 object-fit shadow
            "
        />
            <h1 class="h1 font-bold whitespace-nowrap 
                text-2xl sm:text-3xl lg:text-4xl ">
                {name}
            </h1>
            <h2 class="text-sm h4 font-semibold dark:text-primary-600 text-primary-700 whitespace-nowrap">{title}</h2>
        
        <div class = "flex justify-center gap-2 pt-2">
            <button aria-label="Projects"
                type="button" 
                class="{`${projects=="about" ? toggleButton : defaultButton}`}{customButton}"
                onclick = {()=> projects = (projects =="about") ? "home" : "about"}
            >
                About
            </button>
            <button aria-label="Projects"
                type="button" 
                class="{`${projects=="projects" ? toggleButton : defaultButton}`}{customButton}"
                onclick = {()=> projects = (projects =="projects") ? "home" : "projects"}
            >
                Projects
            </button>
        </div>
    </div>

    <div class="flex flex-col order-2 items-start
        pt-2 sm:pt-10 sm:max-w-[90%] w-[90%]
        flex-grow overflow-y-auto no-scrollbar
        sm:max-h-[80vh] max-h-[55vh]">
        {#if projects == "projects"}
            <FileSys />
        {:else if projects == "about"}
            {desc}
        {:else}
            1234
        {/if}
    </div>

</div>
