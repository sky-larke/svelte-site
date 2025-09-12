<script lang="ts">
    let book1 = "The Solar Cycle";
    let author1 = "Gene Wolfe";

    let book2 = "The Expanse";
    let author2 = "James S.A. Corey";
</script>

<h2 class="font-bold h4">Hi, I'm Erin.</h2>
<div class="break-words">
    <p>
        I'm from Seattle, unless you're also from Seattle, in which case I'm
        actually from half an hour away.
    </p>
    <p>
        Currently, I'm an <b>undergraduate computer science</b>
        student at <b> Northwestern University</b> graduating in
        <b>June 2026</b> with an interest in systems and user-focused design.
        You can contact me by
        <a
            href="mailto:erinpark@u.northwestern.edu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email">email</a
        >
        or
        <a
            href="https://bsky.app/profile/sky-larke.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky">Bluesky</a
        >
    </p>

    <p>
        Unfortunately (for my vision), once I figured out how to read I never
        stopped. I've historically enjoyed various forms of speculative fiction,
        especially American dystopias and anything that has to do with space. I
        recently liked:
    </p>
    <ul>
        <li class="flex flex-row">
            <span class="text-primary-500 pl-3 pr-2 font-bold">-</span><span
                ><i>{book1}</i> by {author1}</span
            >
        </li>

        <li class="flex flex-row">
            <span class="text-primary-500 pl-3 pr-2 font-bold">-</span><span
                ><i>{book2}</i> by {author2}
            </span>
        </li>
    </ul>

    <p>
        Frequently, I drink loose-leaf tea. It's an excellent sensory
        experience, similar and sometimes even exceeding wine, and great for my
        beverage budget. I most often drink oolongs, followed by puer and
        sencha, although I do really enjoy fresh whites such as Silver Needle. I
        have quite a bit of opinions about tea. Sometimes I'll even write notes,
        some of which are on my <a
            href="https://bsky.app/profile/sky-larke.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky">Bluesky.</a
        >.
    </p>
</div>

<style lang="postcss">
    a {
        @apply text-primary-600 underline hover:text-error-500;
    }
</style>
