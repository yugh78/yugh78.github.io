<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import preview from './images/preview.png'
import background from './images/abstract/bg.svg'
console.log('load preview' + preview)
</script>

<template>
  <TheHeader />
  <main class="mb-20">
    <RouterView />
  </main>
  <div
    class="absolute bg-cover min-w-full min-h-full -z-50 opacity-10 flex-grow"
    :style="{ 'background-image': `url('${background}')` }"
  ></div>
  <!-- <TheFooter /> -->
</template>
