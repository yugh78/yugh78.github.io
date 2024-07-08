<script setup>
import { RouterLink } from 'vue-router'
import { SECTIONS } from '@/data/sections'
import { LINKS } from '@/data/links'
import { VIEWS } from '@/data/views'
</script>
<template>
  <header class="flex justify-center p-0 mx-0 sticky bottom-0 z-50 md:top-0 w-full items-start">
    <nav
      class="flex flex-col gap-4 md:py-4 justify-center items-center grow md:from-ziggurat-300 via-transparent to-transparent md:bg-gradient-to-b"
    >
      <div
        class="flex flex-row md:rounded-full p-2 gap-2 bg-ziggurat-500 grow md:grow-0 drop-shadow-lg hover:drop-shadow-2xl shadow-ziggurat-500 hover:shadow-ziggurat-950 transition-all duration-1000"
      >
        <RouterLink
          v-for="view in VIEWS"
          :to="view.path"
          :key="view.title"
          class="nav-btn"
          active-class="selected"
        >
          <i :class="view.icon"></i>
          {{ view.title }}
        </RouterLink>
        <div class="nav-icons">
          <a
            v-for="link in LINKS"
            :key="link.url"
            :class="'nav-i ' + link.service.color"
            :href="link.url"
            target="_blank"
          >
            <i :class="link.service.icon"></i>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
