<script lang="ts">
    let name = "Erin Park";
    let title = "software engineer";
    let imgurl = "/assets/icon.webp";

    import { fade } from "svelte/transition";
    import { _homePage, _lastVisited, _allOpened } from "../../routes/+page";
    import About from "$lib/components/About.svelte";
    import Socials from "$lib/components/socials.svelte";
    import FileSys from "$lib/components/FileSys.svelte";

    function toggleProjects() {
        _homePage.update((value) =>
            value === "projects" ? "home" : "projects",
        );
        _lastVisited.update(() => "");
    }
    function toggleAbout() {
        _homePage.update((value) => (value === "about" ? "home" : "about"));
        _lastVisited.update(() => "");
    }

    let defaultButton =
        "bg-primary-400 hover:bg-secondary-500 focus-visible:bg-secondary-500";
    let customButton =
        "font-semibold hover:font-bold btn-sm flex-1 px-3 shadow shrink transition-all duration-200 ease-in-out transform hover:scale-110 focus-visible:scale-110";
    let toggleButton =
        "font-semibold bg-secondary-500 hover:bg-secondary-500 focus-visible:bg-secondary-500";

    let heroContainer =
        "flex flex-col transition-all duration-500 ease-in-out \
        mx-4em pt-10 max-w-full\
        md:pt-2 md:flex-row md:flex-grow-0";

    let profileContainer =
        "flex flex-col items-center\
        p-3 w-full h-full\
        md:max-w-[50%] md:min-w-[25%] md:pt-[15vh] md:pb-10vh";

    let profileImage =
        "flex object-contain shadow \
        max-w-[20vh] h-auto mb-2\
        md:max-w-[40vh] md:min-w-[20vh] md:mb-4";

    let contentContainer =
        "flex flex-col items-start flex-grow overflow-y-auto overflow-x-hidden no-scrollbar\
        pl-8 w-[90%] pb-[30%] max-h-[60vh] \
        md:pl-3  md:pt-[15vh] md:pb-[10vh] md:max-w-full md:max-h-[90vh]";


</script>

<div class={heroContainer}>
    <div
        class="{profileContainer} transform transition-all duration-500 ease-in-out
    {$_homePage === 'home'
            ? 'md:translate-x-[45%] md:translate-y-0 translate-y-[40%]'
            : ''}"
    >
        <img
            src={imgurl}
            alt="pixel portrait icon"
            title="Made by me with Aseprite."
            class={profileImage}
        />
        <h1
            class="h1 font-bold whitespace-nowrap text-2xl md:text-3xl lg:text-4xl"
        >
            {name}
        </h1>
        <h2 class="text-sm h4 text-primary-900 whitespace-nowrap">
            {title}
        </h2>

        <div class="flex justify-center gap-2 pt-2">
            <button
                aria-label="About"
                type="button"
                class={($_homePage == "about"
                    ? toggleButton
                    : defaultButton) + customButton}
                onclick={toggleAbout}
            >
                About
            </button>
            <button
                aria-label="Projects"
                type="button"
                class={($_homePage === "projects"
                    ? toggleButton
                    : defaultButton) + customButton}
                onclick={toggleProjects}
            >
                Projects
            </button>
        </div>
        <Socials/>
    </div>

    <!-- Content section -->

    <div class={contentContainer}>
        {#key $_homePage}
            <div
                class="transition-opacity ease-in-out duration-500"
                in:fade={{ delay: 200 }}
            >
                {#if $_homePage == "projects"}
                    <FileSys />
                {:else if $_homePage == "about"}
                    <About />
                {/if}
            </div>
        {/key}
    </div>
</div>
