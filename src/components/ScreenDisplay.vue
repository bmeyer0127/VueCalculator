<script setup lang="ts">

  defineProps<{
    display: string
  }>()
</script>

<template>
  <div class="container">
    <h1 class="display-items">{{ display != "" ? display : "0" }}</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: row-reverse wrap-reverse;
  align-items: flex-end;
  background: white;
  color: black;
  width: 100%;
  height: 20%;
}

.display-items {
  display: flex;
  flex-basis: content;
  margin: 0 1rem;
}
</style>
