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
  background-color: #2b2a33;
  border: 2px solid #181818;
  border-radius: 0;
  color: white;
  height: var(--button-size);
  width: var(--button-size);
}

.calc-button:hover {
  background-color: #3c3b43;
  cursor: pointer;
  transition-duration: .1s;
}
</style>
