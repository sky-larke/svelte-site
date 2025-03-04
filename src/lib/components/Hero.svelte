<script lang="ts">
    let name = "Erin Park";
    let title = "software engineer";
    let imgurl = "/assets/icon.webp";

    import { fade } from "svelte/transition";
    import { _homePage, _lastVisited } from "../../routes/+page";

    function toggleProjects() {
        _homePage.update((value) =>
            value === "projects" ? "home" : "projects",
        );
        localStorage.setItem("lastVisited", "");
    }
    function toggleAbout() {
        _homePage.update((value) => (value === "about" ? "home" : "about"));
        localStorage.setItem("lastVisited", "");
    }

    let defaultButton =
        "bg-primary-500/60 hover:bg-secondary-500 focus-visible:bg-secondary-500";
    let customButton =
        "font-semibold hover:font-bold btn-sm flex-1 px-3 shadow shrink transition-all duration-200 ease-in-out transform hover:scale-110 focus-visible:scale-110";
    let toggleButton =
        "font-semibold bg-secondary-500 hover:bg-secondary-500 focus-visible:bg-secondary-500";

    let heroContainer =
        "flex rounded-lg flex-col items-center transition-all duration-500 ease-in-out \
        mx-4em pt-10 sm:pt-2 max-w-full \
        sm:flex-row sm:flex-grow-0";

    let profileContainer =
        "flex flex-col items-center\
        p-3  w-full min-w-[30%] \
        sm:min-w-[20%] sm:max-w-[40%] sm:pt-[10%] z-20";

    let profileImage =
        "flex-shrink-0 object-fit shadow \
        max-w-[20%] h-auto  mb-2\
        sm:max-w-[50%] sm-mb-4";

    let contentContainer =
        "flex flex-col order-2 justify-center flex-grow overflow-y-auto overflow-x-hidden no-scrollbar\
        pl-3 w-[90%] pt-[55%] pb-[10%] max-h-[60vh] \
        sm:pl-5 sm:pt-20 sm:pb-0 sm:max-w-[90%] sm:max-h-[80vh]";

    import FileSys from "$lib/components/FileSys.svelte";

    let book1 = "The Solar Cycle";
    let author1 = "Gene Wolfe";

    let book2 = "The Expanse";
    let author2 = "James S.A. Corey";
</script>

<div class={heroContainer}>
    <div
        class="{profileContainer} transform transition-all duration-500 ease-in-out
    {$_homePage === 'home'
            ? 'sm:translate-x-[70%] sm:translate-y-0 translate-y-[60%]'
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
                class={(($_homePage as string) == "about"
                    ? toggleButton
                    : defaultButton) + customButton}
                onclick={toggleAbout}
            >
                About
            </button>
            <button
                aria-label="Projects"
                type="button"
                class={(($_homePage as string) == "projects"
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
                class="relative transition-opacity ease-in-out duration-500"
                in:fade={{ delay: 200 }}
            >
                {#if $_homePage == "projects"}
                    <FileSys />
                {:else if $_homePage == "about"}
                    <h2 class="font-bold h4">Hi, I'm Erin.</h2>
                    <div class="break-words">
                        <p>
                            I'm from Seattle, unless you're also from Seattle,
                            in which case I'm actually from half an hour away.
                        </p>
                        <p>
                            Currently, I'm an <b
                                >undergraduate computer science</b
                            >
                            student graduating in <b>June 2026</b> with an
                            interest in systems and user-focused design. You can
                            contact me by
                            <a
                                href="mailto:erinpark2024@u.northwestern.edu"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Email">email</a
                            >
                            or
                            <a
                                href="https://bsky.app/profile/sky-larke.bsky.social"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Bluesky">Bluesky.</a
                            >
                        </p>

                        <p>
                            Unfortunately (for my vision), once I figured out
                            how to read I never stopped. I've historically
                            enjoyed various forms of speculative fiction,
                            especially American dystopias and anything that has
                            to do with space. I recently liked:
                        </p>
                        <ul>
                            <li class="flex flex-row">
                                <span
                                    class="text-primary-500 pl-3 pr-2 font-bold"
                                    >-</span
                                ><span><i>{book1}</i> by {author1}</span>
                            </li>

                            <li class="flex flex-row">
                                <span
                                    class="text-primary-500 pl-3 pr-2 font-bold"
                                    >-</span
                                ><span><i>{book2}</i> by {author2} </span>
                            </li>
                        </ul>

                        <p>
                            Frequently, I drink loose-leaf tea. It's an
                            excellent sensory experience, similar and sometimes
                            even exceeding wine, and great for my beverage
                            budget. I most often drink oolongs, followed by puer
                            and sencha, although I do really enjoy fresh whites
                            such as Silver Needle. I have quite a bit of
                            opinions about tea. Sometimes I'll even write notes,
                            some of which are on my <a
                                href="https://bsky.app/profile/sky-larke.bsky.social"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Bluesky">Bluesky.</a
                            >.
                        </p>
                    </div>
                {/if}
            </div>
        {/key}
    </div>
</div>

<style lang="postcss">
    a {
        @apply text-primary-600 underline hover:text-error-500;
    }
</style>
