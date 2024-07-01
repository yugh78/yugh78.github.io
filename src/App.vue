<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
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
