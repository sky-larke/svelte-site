<script lang="ts">

</script>

<style>
    .screen-container {
        top: 5vh;       
        left: 5vw;      
        width: 90vw;     
        height: 90vh;    
        overflow: hidden; /* Hide anything that exceeds the box */
        
        box-sizing: border-box;
        border-radius: 0rem; /* Rounded corners */
        z-index: 50; /* Make sure the box is on top */
    }
  </style>

  <div class="relative screen-container 
    bg-primary-500/10 dark:bg-surface-500/10 
    border-2 border-surface-600 dark:border-primary-100 shadow" 
    >
    <slot></slot>

  </div>