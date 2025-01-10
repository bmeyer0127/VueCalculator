<script setup lang="ts">
  import CalcButton from './CalcButton.vue';

  defineProps<{
    number: number
  }>()
</script>

<template>
   <CalcButton class="number-button">{{ number }}</CalcButton>
</template>

<style scoped>
  .number-button {
    display: flex;
    border: 2px solid #181818;
    border-radius: 0;
    height: var(--button-size);
    width: var(--button-size);
  }
</style>
