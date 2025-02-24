<script lang="ts">
  import "../app.css";
  import "../styles/tailwind.css"; // Import Tailwind CSS globally
  import Screen from "$lib/components/Screen.svelte";
  import Header from "$lib/components/header.svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/state";
</script>

<!-- Global meta tags, favicon, and other head elements -->
<svelte:head>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <meta name="theme-color" content="#ffffff" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Erin Park's Personal Site</title>
  <meta name="application name" content="Erin Park's Personal Site>">
  <meta name="description" content="Hi, I'm Erin, a computer science student. I'm from Seattle, unless you're also from Seattle, in which case I am actually from half an hour away.">
  <meta name="image" content="assets/icon.webp">
  <meta name="base" content="www.erinpark.org">
  <!-- Add other head elements like meta tags, CSS, etc. -->
</svelte:head>

{#key page.url}
  <Screen>
    <Header />
    <div
      class="ease-in-out"
      in:fade={{ duration: 100 }}
      out:fade={{ duration: 100 }}
    >
      <slot />
    </div>
  </Screen>
{/key}
