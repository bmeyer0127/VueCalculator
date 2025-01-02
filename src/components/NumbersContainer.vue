<script setup lang="ts">
  import { ref } from 'vue';
  import NumberButton from './NumberButton.vue';
  import Screen from './Screen.vue';

  const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
</script>

<template>
  <div class="numbers-container">
    <NumberButton v-for="number in numbers" :number="number" :class="'num-class-' + number" @click="Screen.numA = number"/>
  </div>
</template>

<style scoped>
  .numbers-container {
    display: grid;
    grid-template-columns: [col1] 100% [col2] 100% [col3] 100%;
    grid-template-rows: [row1] 100% [row2] 100% [row3] 100% [row4]100%;
    width: 50px;
    height: 50px;
  }

  .num-class-0 {
    grid-column-start: 2;
  }
</style>