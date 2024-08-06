<template>
  <section :id="sectionId">
    <h2>М<span class="letter-highlight">о</span>и проекты</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
      <div v-for="[index, proj] of PROJECTS.entries()" :key="proj.name" class="flex flex-col gap-2 justify-between">
        <div class="flex grow" data-aos="fade-right" :data-aos-delay="index * 200">

          <ProjectCard :project="proj" />
        </div>
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
