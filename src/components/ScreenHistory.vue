<script setup lang="ts">
  defineProps<{
    expressionHistory: string[],
    resultHistory: string[],
    expressionHistoryArray: string[][];
  }>();

  const emits = defineEmits(['rollbackExpression', 'rollbackArray']);

  const handleHistoryClick = (historyItem: string, historyArray: string[]) => {
    emits('rollbackExpression', historyItem);
    emits('rollbackArray', historyArray);
  }
</script>

<template>
  <div class="history-screen-container">
      <ul class="expression-history-column history-column">
        <li class="history-item" v-for="item in expressionHistory" :key="item">
            <button @click="handleHistoryClick(item, expressionHistoryArray[expressionHistory.indexOf(item)])" class="expression-history-item">{{ item }}</button>
        </li>
      </ul>
      <ul class="result-history-column history-column">
        <li class="history-item" v-for="item in resultHistory" :key="item">
            <p class="result-history-item">{{ item }}</p>
        </li>
      </ul>
  </div>
</template>

<style scoped>
  li {
    list-style: none;
    width: 100%;
  }

  ul {
    padding: 0;
    width: 100%;
  }

  p {
    margin: 0;
  }

  button {
    border: none;
    padding: 0;
  }

  button:hover {
    border: none !important;
  }

  .history-screen-container {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .expression-history-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }

  .result-history-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }

  .history-item {
    font-size: 1rem;
    margin: 0;
    width: 100%;
    height: 2rem;
  }

  .expression-history-item {
    /* display: flex; */
    background-color: var(--history-button-color);
    color: var(--history-button-text-color);
    width: 100%;
  }

  .expression-history-item:hover {
    background-color: var(--history-button-color-hover);
    color: var(--history-button-text-color-hover);
    border: 2px solid #181818;
    cursor: pointer;
    transition-duration: .1s;
  }

  .result-history-item {
    /* display: flex; */

  }
</style>
