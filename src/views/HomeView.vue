<script setup>
import { RouterLink } from 'vue-router'
import { getHead } from '@/data/openGraph'
import { useHead } from '@vueuse/head'

useHead(getHead('Главная'))
</script>
<template>
  <section class="grow min-h-fit flex flex-col justify-center">
    <div class="flex flex-col justify-center gap-10">
      <div class="flex flex-col gap-1">
        <h1 class="font-petrov text-ziggurat-950">
          <span class="letter-highlight">П</span>ривет, подписчики, я Евгений Дмитриевич
        </h1>
        <div class="mt-4 text-center text-2xl text-ziggurat-600 gap-10 items-baseline">
          Это мой сайт-визитка
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class=""></div>
        <RouterLink to="/about"
          class="btn-flat btn rounded-full py-4 hover:-translate-y-1 hover:bg-opacity-75 hover:backdrop-blur-lg">
          Обо мне <i class="fas fa-arrow-right text-center ease-linear"></i>
        </RouterLink>
        <div class=""></div>
      </div>
    </div>
  </section>
</template>
