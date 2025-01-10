<script setup lang="ts">

  defineProps<{
    expression: string,
    result: string
  }>();
</script>

<template>
  <div class="screen-container">
    <h1 class="display-items expression">{{ expression != "" ? expression : "0" }}</h1>
    <!-- <textarea class="display-items expression" :value="expression"></textarea> -->
    <h1 class="display-items result">{{ result != "" ? "= " + result : "= 0"}}</h1>
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
  height: calc(100vh - (var(--button-size) * 11))
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
