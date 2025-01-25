<script>
    import GithubIcon from '~icons/mdi/github';
    import LinkedIn from '~icons/mdi/linkedin';
    import Mail from '~icons/mdi/email';

    let github = "https://github.com/sky-larke"
    let linkedin = "https://www.linkedin.com/in/erin--park/"
    let email = "mailto:erinpark2024@u.northwestern.edu"
</script>

<div class="items-center flex space-x-3">
<a href={github}  target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <GithubIcon class="hover:text-error-400"></GithubIcon>
</a>



<a href={linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <LinkedIn class="hover:text-tertiary-400"></LinkedIn>
</a>



<a href={email} target="_blank" rel="noopener noreferrer" aria-label="Email">
    <Mail class="hover:text-success-400"></Mail>
</a>
</div>

