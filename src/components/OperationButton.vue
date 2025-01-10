<script setup lang="ts">
  import CalcButton from './CalcButton.vue';

  defineProps({
    operation: { type: [Object, String] , required: false }
  });
</script>

<template>
   <CalcButton class="operation-button"> {{ operation }} <slot class="svg-slot"></slot></CalcButton>
</template>

<style scoped>
  .operation-button {
    width: var(--button-size);
    height: var(--button-size);
    border: 2px solid #181818;
    border-radius: 0;
  }

  .svg-slot {
    display: flex;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>
