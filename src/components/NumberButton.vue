<script setup lang="ts">
  import '@material/web/button/filled-button.js'

  defineProps<{
    number: string
  }>()
</script>

<template>
  <md-filled-button class="number-button">{{ number }}</md-filled-button>
</template>

<style scoped>
  .number-button {
    width: 50px;
    height: 50px;
  }
</style>