<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import { onMount } from 'svelte';

    let windowWidth = 0;
    let isBrowser = false;

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
        ? windowWidth < 600 ? '1.5rem' : windowWidth < 1200 ? '1.5rem' : '3rem'
        : '1..5rem'; // Default padding when SSR or no access to window
</script>

<style>
    .screen-container {
        top: 5vh;       /* 2.5% from the top of the viewport */
        left: 5vw;      /* 5% from the left of the viewport */
        width: 90vw;     /* 80% of the viewport width */
        height: 90vh;    /* 80% of the viewport height */
        overflow: hidden; /* Hide anything that exceeds the box */
        
        box-sizing: border-box;
        border-radius: 0rem; /* Rounded corners */
        z-index: 50; /* Make sure the box is on top */
      
    }
    
    .content {
        height: calc(100% - 4rem); /* Take up full height of the box but compensate for padding*/
        overflow: auto; /* Allow content to scroll */
        box-sizing: border-box;
    }
    
  </style>

  <div class="z-50 fixed screen-container 
    bg-primary-500/10 dark:bg-surface-500/10 border-2 border-surface-600 dark:border-primary-100 shadow" style="--padding: {padding}">
    <Header></Header>
    <main class="content 
        sm:py-12 p-3
        sm:mx-12 mx-3">
        <slot></slot>
    </main>

  </div>