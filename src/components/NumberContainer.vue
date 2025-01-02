<script setup lang="ts">
  import { ref } from 'vue';
  import NumberButton from './NumberButton.vue';

  const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
</script>

<template>
  <div class="number-container">
    <NumberButton v-for="number in numbers" v-bind:number="number"/>
    <!-- <NumberButton number="1" />
    <NumberButton number="2" />
    <NumberButton number="3" />
    <NumberButton number="4" />
    <NumberButton number="5" />
    <NumberButton number="6" />
    <NumberButton number="7" />
    <NumberButton number="8" />
    <NumberButton number="9" />
    <NumberButton class="zero" number="0" /> -->
  </div>
</template>

<style scoped>
  .number-container {
    display: grid;
    grid-template-columns: [col1] 100% [col2] 100% [col3] 100%;
    grid-template-rows: [row1] 100% [row2] 100% [row3] 100% [row4]100%;
    align-self: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }

  row4 {
    grid-column-start: 2;
  }
</style>