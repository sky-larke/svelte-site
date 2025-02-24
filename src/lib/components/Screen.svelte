<script lang="ts">
</script>

<div
  class="absolute screen-container 
    bg-primary-100 dark:bg-surface-500/10
    border-0 border-primary-900 dark:border-primary-100 shadow"
>
  <slot></slot>
</div>

<style>
  .screen-container {
    top: 5vh;
    left: 5vw;
    width: 90vw;
    height: 90vh;
    overflow: hidden; /* Hide anything that exceeds the box */

    box-sizing: border-box;
    border-radius: 0.5rem; /* Rounded corners */
    z-index: 50; /* Make sure the box is on top */
  }
</style>
