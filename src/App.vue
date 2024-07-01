<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
import preview from './images/preview.png'
console.log('load preview' + preview)
</script>

<template>
  <header>
    <nav></nav>
  </header>

  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>
