<script setup>
import SECTIONS from '../data/sections'
</script>
<template>
  <!-- Page header -->
  <hgroup class="pb-10">
    <h1><span class="letter-highlight">П</span>ривет подписчики, я Евгений Дмитриевич</h1>
    <div class="text-center text-3xl font-amatic font-black">
      Это мой сайт-визитк<span class="letter-highlight">а</span>
    </div>
  </hgroup>
  <div v-for="section in SECTIONS" :key="section.id">
    <component :is="section.component"></component>
  </div>
</template>
<script></script>
