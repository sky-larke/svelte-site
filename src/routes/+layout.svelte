<script context="module" lang="ts">
    import '../styles/tailwind.css';  // Import Tailwind CSS globally
    import Screen from "$lib/components/Screen.svelte";
</script>

<!-- Global meta tags, favicon, and other head elements -->
<svelte:head>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <meta name="theme-color" content="#ffffff" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Erin Park's Personal Site</title>
  <!-- Add other head elements like meta tags, CSS, etc. -->
</svelte:head>


<Screen>
    <slot></slot>
</Screen>





  


