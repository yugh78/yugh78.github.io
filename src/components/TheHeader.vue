<script setup>
import { RouterLink } from 'vue-router'
import { LINKS } from '@/data/links'
import { VIEWS } from '@/data/views'
</script>
<template>
  <header class="flex justify-center p-0 mx-0 z-50 w-full items-start overflow-x-hidden fixed md:top-0 md:bottom-auto">
    <nav
      class="flex flex-col grow gap-4 md:py-4 justify-center items-center md:from-ziggurat-300 via-transparent to-transparent md:bg-gradient-to-b sticky md:top-0">
      <div
        class="font-petrov flex flex-row grow md:rounded-full p-2 gap-2 bg-ziggurat-500 md:grow-0 drop-shadow-lg shadow-ziggurat-500 hover:shadow-ziggurat-950 transition-all duration-1000 min-w-full md:min-w-fit">
        <RouterLink v-for="view in VIEWS" :to="view.path" :key="view.title" class="nav-btn group min-w-fit text-center"
          active-class="selected grow">
          <i :class="view.icon"></i>
          <div class="w-0 group-[.selected]:w-auto group-hover:w-auto duration-1000">
            <span class="invisible group-[.selected]:visible group-hover:visible duration-0">
              {{ view.title }}
            </span>
          </div>
        </RouterLink>
        <div class="nav-icons">
          <a v-for="link in LINKS" :key="link.url" :class="'nav-i ' + link.service.color" :href="link.url"
            target="_blank">
            <i :class="link.service.icon"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
