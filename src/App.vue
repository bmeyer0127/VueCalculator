<script setup lang="ts">
  import { ref } from 'vue'
  import NumberButton from './components/NumberButton.vue'
  import OperationButton from './components/OperationButton.vue'
  import ScreenDisplay from './components/ScreenDisplay.vue'
  import '@material/web/button/filled-button.js'
  import '@material/web/button/outlined-button.js'
  import '@material/web/button/elevated-button.js'
  import '@material/web/checkbox/checkbox.js'

  const screenDisplay = ref<string>('');

  const appendToScreen = (item: string) => {
    screenDisplay.value += item;
  }
  const trimScreenDisplay = () => {
    screenDisplay.value = screenDisplay.value.slice(0, -1);
  }
</script>

<template>
  <main>
    <div class="calc-container">
      <ScreenDisplay :expression="screenDisplay" :result="screenDisplay"/>
        <div class="numbers-container">
           <div class="num-container-row">
             <NumberButton :number="1" class="'num-1" @click="appendToScreen('1')"/>
             <NumberButton :number="2" class="'num-2" @click="appendToScreen('2')"/>
             <NumberButton :number="3" class="'num-3" @click="appendToScreen('3')"/>
           </div>
           <div class="num-container-row">
             <NumberButton :number="4" class="'num-4" @click="appendToScreen('4')"/>
             <NumberButton :number="5" class="'num-5" @click="appendToScreen('5')"/>
             <NumberButton :number="6" class="'num-6" @click="appendToScreen('6')"/>
           </div>
           <div class="num-container-row">
             <NumberButton :number="7" class="'num-7" @click="appendToScreen('7')"/>
             <NumberButton :number="8" class="'num-8" @click="appendToScreen('8')"/>
             <NumberButton :number="9" class="'num-9" @click="appendToScreen('9')"/>
           </div>
           <div class="num-container-row">
             <OperationButton operation="." class="decimal-point" @click="appendToScreen('.')" />
             <NumberButton :number="0" class="'num-0" @click="appendToScreen('0')"/>
             <OperationButton operation="X" class="backspace" @click="trimScreenDisplay" />
           </div>
        </div>
      </div>
  </main>
</template>

<style scoped>

  .calc-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .numbers-container {
    display: flex;
    flex-wrap: wrap;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    width: calc(var(--button-size) * 3);
  }

  .num-container-row {
    display: flex;
    flex-wrap: nowrap;
  }

  .num-class-0 {
    grid-column-start: 2;
  }

  .decimal-point {
    grid-column-start: 1;
    grid-row-start: 4;
  }

  .backspace {
    grid-column-start: 3;
    grid-row-start: 4;
  }
</style>
