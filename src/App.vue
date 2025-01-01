<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import NumberContainer from './components/NumberContainer.vue'
import NumberButton from './components/NumberButton.vue'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/elevated-button.js'
import '@material/web/checkbox/checkbox.js'
</script>

<template>
  <header>
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <main>
    <NumberContainer />
  </main>
</template>