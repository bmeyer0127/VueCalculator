<script setup lang="ts">
  import '@material/web/button/filled-button.js'

  defineProps<{
    operation: string
  }>()
</script>

<template>
  <md-filled-button class="operation-button">{{ operation }}</md-filled-button>
</template>

<style scoped>
  .operation-button {
    width: 50px;
    height: 50px;
    border: 2px solid #181818;
    border-radius: 0;
    --md-sys-color-primary: #2b2a33;
  }
</style>
