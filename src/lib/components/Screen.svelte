<script lang="ts">
    import HeaderAlt from "$lib/components/blogheader.svelte";
    import { onMount } from 'svelte';

    let windowWidth = 0;
    let isBrowser = false;

    // This check ensures that we only access the window object in the browser.
    onMount(() => {
        isBrowser = typeof window !== 'undefined';  // Check if window exists
        if (isBrowser) {
        windowWidth = window.innerWidth;
        const updateDimensions = () => {
            windowWidth = window.innerWidth;
        };
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
        }
    });

    // Calculate padding based on screen width
    $: padding = isBrowser
        ? windowWidth < 600 ? '1rem' : windowWidth < 1200 ? '1rem' : '2rem'
        : '1rem'; // Default padding when SSR or no access to window
</script>

<style>
    .screen-container {
        position: fixed;
        top: 5vh;       /* 10% from the top of the viewport */
        left: 5vw;      /* 10% from the left of the viewport */
        width: 90vw;     /* 80% of the viewport width */
        height: 90vh;    /* 80% of the viewport height */
        overflow: hidden; /* Hide anything that exceeds the box */
        
        box-sizing: border-box;
        border-radius: 1rem; /* Rounded corners */
        z-index: 50; /* Make sure the box is on top */
      
    }
    
    .content {
        margin-left: var(--padding);
        margin-right: var(--padding);
        height: calc(100% - 4rem); /* Take up full height of the box but compensate for padding*/
        overflow: auto; /* Allow content to scroll */
        padding: 1rem; /* Add inner padding to the content */
        box-sizing: border-box;
    }
    
  </style>
  
  <div class="screen-container bg-screen-400 border-2 border-surface-300 dark:border-surface-500" style="--padding: {padding}">
    <HeaderAlt></HeaderAlt>
    <div class="content">
        <slot></slot>
      </div>

  </div>