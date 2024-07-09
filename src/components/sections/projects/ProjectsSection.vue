<template>
  <section :id="sectionId">
    <h2>М<span class="letter-highlight">о</span>и проекты</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div v-for="proj in PROJECTS" :key="proj.name" class="flex flex-col gap-2 justify-between">
        <ProjectCard :project="proj" />
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  sectionId: String
})

import ProjectCard from '@/components/sections/projects/ProjectCard.vue'

import { PROJECTS } from '@/data/projects'
</script>
