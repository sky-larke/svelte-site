<script lang="ts">
    import '../../styles/tailwind.css';  // Import Tailwind CSS globally
    import BlogHeader from "$lib/components/BlogHeader.svelte"
    const breadcrumbs = [{label:"about", link:"about"}];
    let desc = "Hi, I'm Erin. My main interests are in user-focused design, such as front-end development, UI/UX design, etc. I also have a game design hobby, due to enjoying creation of art, writing, and coding. I'm from Seattle, unless you're from Seattle, in which case I am actually from half an hour away."
</script>
<BlogHeader {breadcrumbs}/>

<div class="flex py-10 px-10 sm-px-20 justify-center 
        m-1em w-full order-2">
        {desc}
 </div>