<script setup lang="ts">
  import { ref } from 'vue';
  import NumberButton from './components/NumberButton.vue'
  import ScreenDisplay from './components/ScreenDisplay.vue'
  import '@material/web/button/filled-button.js'
  import '@material/web/button/outlined-button.js'
  import '@material/web/button/elevated-button.js'
  import '@material/web/checkbox/checkbox.js'

  const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  const screenDisplay = ref<string>('');

  const appendNumber = (num: string) => {
    screenDisplay.value += num;
  }
</script>

<template>
  <main>
    <div class="calc-container">
      <ScreenDisplay :display="screenDisplay"/>

      <div class="numbers-container">
        <NumberButton v-for="number in numbers" :number="number" :key="number" :class="'num-class-' + number" @click="appendNumber(number.toString())"/>
      </div>

    </div>
  </main>
</template>

<style scoped>
  .calc-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

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
