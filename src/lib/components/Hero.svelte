
<script lang="ts">
    import Mobile from '$lib/components/mobile.svelte'
    import Desktop from '$lib/components/desktop.svelte'
    import Socials from './socials.svelte';

    let name = "Erin Park"
    let title = "software engineer"
    let imgurl = "assets/icon.webp"
</script>

<div class="flex items-center max-w-full rounded-lg flex-col 
    sm:flex-row transition-all duration-100 ease-in-out
    mx-4em">

    <div class="flex flex-col items-center w-[60%] order-1 flex-shrink-0
        mb-4 
        sm:w-[30%] sm:mb-0 sm:order-1 sm:flex-grow-0">
      <img 
            src= {imgurl}
            alt="pixel portrait icon" 
            title="Made by me with Aseprite."
            class="rounded-md border-1 border-secondary-500/50 dark:border-primary-100/50
            sm: max-w-[90%] sm:min-w-[90%] 
            max-w-full min-w-[40%] h-auto mb-4 "
        />
            <h1 class="h1 font-bold whitespace-nowrap 
                text-2xl sm:text-3xl lg:text-4xl">
                {name}
            </h1>
        
        
        <h2 class="text-sm h4 font-semibold text-primary-600 whitespace-nowrap">{title}</h2>
    </div>

    <div class="flex flex-col p-4 justify-center 
        sm:w-[70%] sm:m-10
        m-1em w-full order-2 flex-grow">
        <p>My main interests are in user-focused design, such as front-end development, UI/UX design, etc. I also have a game design hobby, due to enjoying creation of art, writing, and coding. </p>
     <p>I'm from Seattle, unless you're from Seattle, in which case I am actually from half an hour away</p>
    </div>
</div>
