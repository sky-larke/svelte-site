
<script lang="ts">
    let name = "Erin Park"
    let title = "software engineer"
    let imgurl = "/assets/icon.webp"
    
    let defaultButton = "bg-primary-600/40 hover:bg-secondary-500 focus-visible:bg-secondary-500";
    let customButton = "font-semibold hover:font-bold btn-sm flex-1 px-3 shadow shrink transition-all duration-200 ease-in-out transform hover:scale-110 focus-visible:scale-110";
    let toggleButton = "font-semibold bg-secondary-500 hover:bg-secondary-500 focus-visible:bg-secondary-500";
    let projects = $state("home");

    import FileSys from "$lib/components/FileSys.svelte";

    let { hierarchy = [] } = $props();

    const desc = `
    I'm from Seattle, unless you're also from Seattle, in which case I am actually from half an hour away.
    `;

    let centered = "absolute sm:top-[5%] top-[30%]";
    let left = "absolute sm:top-[5%] top-[5%] sm:left-[5%] left-[20%]";
    let right = "absolute sm:top-1/3 top-[35%] sm:right-[-25%] sm:-translate-y-1/3  ";
</script>

<!-- Parent container dynamically aligns based on state -->
<div class="flex max-w-full rounded-lg flex-col sm:flex-row sm:flex-grow-0 mx-4em pt-10
    transition-all duration-300 ease-in-out justify-center"
    class:justify-center={projects === "home"} 
    class:items-center={projects === "home"}
    class:sm:justify-start={projects !== "home"} 
    class:sm:items-start={projects !== "home"}
>
    <!-- Profile section with dynamic positioning -->
    <div class="{projects == 'home' ? centered : left} flex flex-col items-center p-3 sm:pt-20 
        transition-all duration-300 ease-in-out
        w-[60%] min-w-[30%] sm:min-w-[20%] sm:max-w-[40%]"
    >
        <img 
            src={imgurl}
            alt="pixel portrait icon" 
            title="Made by me with Aseprite."
            class="border-1 border-secondary-500/50 dark:border-primary-100/50
            sm:max-w-[50%] max-w-[30%] h-auto sm-mb-4 mb-2
            flex-shrink-0 object-fit"
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
    <div class="{right} flex flex-col order-2  justify-start
        pl-3 sm:pl-10 pt-2 sm:pt-15 sm:mt-3 sm:max-w-[90%] w-[90%]
        flex-grow overflow-y-auto overflow-x-hidden no-scrollbar
        sm:max-h-[80vh] max-h-[60vh] pb-10
        transition-opacity duration-500 ease-in-out
        {projects === 'projects' || projects === 'about' ? 'opacity-100' : 'opacity-0'}
        "
    >
        {#if projects == "projects"}
            <FileSys {hierarchy}/>
        {:else if projects =="about"}
            <p class="font-semibold font-size-md">Hi, I'm Erin.</p>
            <div class="break-words">{desc}</div>

        {/if}
    </div>
</div>
