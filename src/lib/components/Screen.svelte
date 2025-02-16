<script lang="ts">
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
        : '1.5rem'; // Default padding when SSR or no access to window
</script>

<style>
    .screen-container {
        top: 5vh;       /* 2.5% from the top of the viewport */
        left: 5vw;      /* 5% from the left of the viewport */
        right: 5vw;      /* 5% from the left of the viewport */
        min-width: 90vw;     /* 80% of the viewport width */
        min-height: 90vh;    /* 80% of the viewport height */
        overflow: hidden; /* Hide anything that exceeds the box */
        
        box-sizing: border-box;
        border-radius: 0rem; /* Rounded corners */
        z-index: 50; /* Make sure the box is on top */
    }
  </style>

  <div class="fixed screen-container 
    bg-primary-500/10 dark:bg-surface-500/10 
    border-2 border-surface-600 dark:border-primary-100 shadow" 
    style="--padding: {padding}">
    <slot></slot>

  </div>