<script lang="ts">
    let name = "Erin Park";
    let title = "software engineer";
    let imgurl = "/assets/icon.webp";

    import { fade } from "svelte/transition";
    import { _homePage, _lastVisited, _allOpened } from "../../routes/+page";
    import { get } from "svelte/store";
    import About from "./About.svelte";

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
        "bg-primary-500/60 hover:bg-secondary-500 focus-visible:bg-secondary-500";
    let customButton =
        "font-semibold hover:font-bold btn-sm flex-1 px-3 shadow shrink transition-all duration-200 ease-in-out transform hover:scale-110 focus-visible:scale-110";
    let toggleButton =
        "font-semibold bg-secondary-500 hover:bg-secondary-500 focus-visible:bg-secondary-500";

    let heroContainer =
        "flex flex-col transition-all duration-500 ease-in-out \
        mx-4em pt-10 max-w-full\
        sm:pt-2 sm:flex-row sm:flex-grow-0";

    let profileContainer =
        "flex flex-col items-center\
        p-3 w-full h-full\
        sm:w-[60%] sm:pt-[15vh] sm:pb-10vh";

    let profileImage =
        "flex-shrink-0 object-fit shadow \
        max-w-[20vh] h-auto mb-2\
        sm:max-w-[40vh] sm:mb-4";

    let contentContainer =
        "flex flex-col items-start flex-grow overflow-y-auto overflow-x-hidden no-scrollbar\
        pl-3 w-[90%] pb-[30%] max-h-[60vh] \
        sm:pr-[10vh] sm:pt-[15vh] sm:pb-[10vh] sm:max-w-full sm:max-h-[90vh]";

    import FileSys from "$lib/components/FileSys.svelte";
</script>

<div class={heroContainer}>
    <div
        class="{profileContainer} transform transition-all duration-500 ease-in-out
    {$_homePage === 'home'
            ? 'sm:translate-x-[75%] sm:translate-y-0 translate-y-[60%]'
            : ''}"
    >
        <img
            src={imgurl}
            alt="pixel portrait icon"
            title="Made by me with Aseprite."
            class={profileImage}
        />
        <h1
            class="h1 font-bold whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl"
        >
            {name}
        </h1>
        <h2 class="text-sm h4 font-semibold text-primary-700 whitespace-nowrap">
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
