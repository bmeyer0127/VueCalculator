<script setup lang="ts">
  import NumberButton from './NumberButton.vue';
</script>

<template>
  <div class="number-container">
    <NumberButton number="1" />
    <NumberButton number="2" />
    <NumberButton number="3" />
    <NumberButton number="4" />
    <NumberButton number="5" />
    <NumberButton number="6" />
    <NumberButton number="7" />
    <NumberButton number="8" />
    <NumberButton number="9" />
    <NumberButton class="zero" number="0" />
  </div>
</template>

<style scoped>
  .number-container {
    display: grid;
    grid-template-columns: [col1] 100% [col2] 100% [col3] 100%;
    grid-template-rows: [row1] 100% [row2] 100% [row3] 100% [row4]100%;
    width: 50px;
    height: 50px;
  }

  .zero {
    grid-column-start: 2;
  }
</style>