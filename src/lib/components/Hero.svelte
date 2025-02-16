
<script lang="ts">
    let name = "Erin Park"
    let title = "software engineer"
    let imgurl = "assets/icon.webp"
    let desc = "My main interests are in user-focused design, such as front-end development, UI/UX design, etc. I also have a game design hobby, due to enjoying creation of art, writing, and coding. I'm from Seattle, unless you're from Seattle, in which case I am actually from half an hour away."
    let custombutton = "font-semibold bg-primary-600/30 btn-sm flex-1 px-3 shadow shrink transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-icon-pink hover:dark:bg-error-600 hover:underline focus:scale-110 focus:bg-icon-pink focus:dark:bg-error-600 focus:underline"
    let projects = $state(false);
</script>

<div class="flex items-center max-w-full rounded-lg flex-col 
    sm:flex-row 
    mx-4em ">

    <div class="flex flex-col items-center w-[60%] order-1 
        mb-4 min-w-[30%]
        sm:w-[30%] sm:mb-0 sm:order-1 sm:flex-grow-0">
      <img 
            src= {imgurl}
            alt="pixel portrait icon" 
            title="Made by me with Aseprite."
            class=" border-1 border-secondary-500/50 dark:border-primary-100/50
            sm:min-w-[90%] 
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
            <a href="/about" aria-label="About"
                type="button" 
                class={custombutton}
            >
                About
            </a>
            <button aria-label="Projects"
                type="button" 
                class={custombutton}
            >
                Projects
        </button>
        </div>
    </div>

    <div class="flex flex-col p-4 justify-center 
        sm:w-[70%] 
        m-1em w-full order-2 flex-grow">
        {desc}
    </div>
</div>
