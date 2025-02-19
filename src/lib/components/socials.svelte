<script>
    import GithubIcon from '~icons/mdi/github'
    import LinkedIn from '~icons/mdi/linkedin'
    import Mail from '~icons/mdi/email'

    let github = "https://github.com/sky-larke"
    let linkedin = "https://www.linkedin.com/in/erin--park/"
    let email = "mailto:erinpark2024@u.northwestern.edu"
</script>
<style lang="postcss">
    img {
    @apply h-6 w-6;  /* Set the height and width for images */
  }
</style>

<div class="items-center flex space-x-3">
    <a href={github}  target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <GithubIcon class="transition-transform duration-300 ease-in-out transform 
            hover:scale-110 hover:text-primary-700 hover:dark:text-primary-400
            focus:scale-110 focus:text-primary-700 focus:dark:text-primary-400"></GithubIcon>
    </a>


    <a href={linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <LinkedIn class="transition-transform duration-300 ease-in-out transform 
        hover:scale-110 hover:text-tertiary-500 hover:dark:text-tertiary-600-400
        focus:scale-110 focus:text-tertiary-600-700 focus:dark:text-tertiary-600-400"></LinkedIn>
    </a>



    <a href={email} target="_blank" rel="noopener noreferrer" aria-label="Email">
        <Mail class="transition-transform duration-300 ease-in-out transform 
        hover:scale-110 hover:text-warning-400 hover:dark:text-warning-400
        focus:scale-110 focus:text-warning-400 focus:dark:text-warning-400"
        ></Mail>
    </a>
</div>

