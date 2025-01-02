<script setup lang="ts">
  import { ref } from 'vue';

  defineProps<{
    display: string
  }>()
</script>

<template>
  <div class="container">
    <h1>{{ display }}</h1>
  </div>
</template>

<style scoped>
.container {
  background: white;
  color: black;
  width: 100%;
  height: 20%;
  /* padding: 2rem; */
}
</style>