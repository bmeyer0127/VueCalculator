<script setup lang="ts">
  import NumberButton from './NumberButton.vue';
</script>

<template>
  <div class="number-container">
    <NumberButton number="5" />
  </div>
</template>

<style scoped>
  .number-container {
    width: 50px;
    height: 50px;
  }
</style>