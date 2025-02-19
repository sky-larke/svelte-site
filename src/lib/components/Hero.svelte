
<script lang="ts">
    let name = "Erin Park"
    let title = "software engineer"
    let imgurl = "/assets/icon.webp"
    let projects = $state("home");
    
    let defaultButton = "bg-primary-600/40 hover:bg-secondary-500 focus-visible:bg-secondary-500";
    let customButton = "font-semibold hover:font-bold btn-sm flex-1 px-3 shadow shrink transition-all duration-200 ease-in-out transform hover:scale-110 focus-visible:scale-110";
    let toggleButton = "font-semibold bg-secondary-500 hover:bg-secondary-500 focus-visible:bg-secondary-500";
    
    let heroContainer = "flex rounded-lg flex-col justify-center items-center transition-all duration-500 ease-in-out \
        mx-4em pt-10 max-w-full \
        sm:flex-row sm:flex-grow-0";

    let profileContainer = "flex flex-col items-center transition-all duration-300 ease-in-out \
        p-3 sm:pt-20 w-full min-w-[30%] \
        sm:min-w-[20%] sm:max-w-[40%]";

    let profileImage = "border-1 border-secondary-500/50 flex-shrink-0 object-fit\
        max-w-[20%] h-auto  mb-2\
        sm:max-w-[50%] sm-mb-4";

    let contentContainer = "flex flex-col order-2 justify-start flex-grow overflow-y-auto overflow-x-hidden no-scrollbar\
        pl-3 pt-2 pb-10 w-[90%] max-h-[60vh] \
        sm:pl-10 sm:pt-15 sm:mt-3 sm:max-w-[90%] sm:max-h-[80vh]\
        transition-opacity duration-500 ease-in-out";

    import FileSys from "$lib/components/FileSys.svelte";

    let { hierarchy = [] } = $props();

    const desc = `
    I'm from Seattle, unless you're also from Seattle, in which case I am actually from half an hour away.
    `;


</script>

<!-- Parent container dynamically aligns based on state -->
<div class="{heroContainer}{(projects === "home") ? "" : "sm:justify-start sm:items-start"}">
    <!-- Profile section with dynamic positioning -->
    <div class="{profileContainer}"
    >
        <img 
            src={imgurl}
            alt="pixel portrait icon" 
            title="Made by me with Aseprite."
            class="{profileImage}"
        />
        <h1 class="h1 font-bold whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl">
            {name}
        </h1>
        <h2 class="text-sm h4 font-semibold dark:text-primary-600 text-primary-700 whitespace-nowrap">
            {title}
        </h2>
    
        <div class="flex justify-center gap-2 pt-2">
            <button 
                aria-label="About"
                type="button" 
                class="{(projects == 'about' ? toggleButton : defaultButton) + ' ' + customButton}"
                onclick={() => projects = (projects == "about") ? "home" : "about"}
            >
                About
            </button>
            <button 
                aria-label="Projects"
                type="button" 
                class="{(projects == 'projects' ? toggleButton : defaultButton) + ' ' + customButton}"
                onclick={() => projects = (projects == "projects") ? "home" : "projects"}
            >
                Projects
            </button>
        </div>
    </div>

    <!-- Content section -->
    {#if projects != "home"}
    <div class="{contentContainer}{projects === 'projects' || projects === 'about' ? 'opacity-100' : 'opacity-0'}"
    >
        {#if projects == "projects"}
            <FileSys {hierarchy}/>
        {:else if projects =="about"}
            <p class="font-semibold font-size-md">Hi, I'm Erin.</p>
            <div class="break-words">{desc}</div>

        {/if}
    </div>
    {/if}
</div>
