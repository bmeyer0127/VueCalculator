<script setup lang="ts">

defineProps({
    buttonChar: { type: [Object, String] , required: false }
  });

</script>

<template>
  <button class="calc-button"> {{ buttonChar }} <slot class="svg-slot"></slot></button>
</template>

<style scoped>
.calc-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--button-color);
  border: 2px solid var(--button-border-color);
  border-radius: 0;
  color: var(--button-text-color);
  height: var(--button-size);
  width: var(--button-size);
}

.calc-button:hover {
  background-color: var(--button-color-hover);
  color: var(--button-text-color-hover);
  cursor: pointer;
  transition-duration: .1s;
}
</style>
