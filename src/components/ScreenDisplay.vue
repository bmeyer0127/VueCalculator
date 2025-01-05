<script setup lang="ts">

  defineProps<{
    expression: string,
    result: string
  }>()
</script>

<template>
  <div class="screen-container">
    <h1 class="display-items expression">{{ expression }}</h1>
    <h1 class="display-items result">{{ result != "" ? "= " + result : "= 0" }}</h1>
  </div>
</template>

<style scoped>
.screen-container {
  display: flex;
  flex-flow: column wrap-reverse;
  align-items: flex-start;
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

.expression {

}

.result {

}
</style>
