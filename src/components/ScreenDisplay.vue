<script setup lang="ts">

  defineProps<{
    expression: string,
    result: string
  }>();

  // const expression = defineModel();
</script>

<template>
  <h1 class="display-items expression">{{ expression != "" ? expression : "0" }}</h1>
  <h1 class="display-items result">{{ result != "" ? "= " + result : "= 0"}}</h1>
</template>

<style scoped>
.display-items {
  display: flex;
  flex-basis: content;
  font-size: 2rem;
  margin: 0 1rem;
}
</style>
