<template>
  <div
    class="rounded-xl flex flex-col justify-between gap-3 border bg-ziggurat-200 min-h-40 shadow-ziggurat-500 border-ziggurat-500 drop-shadow-sm transition-all p-6 hover:-translate-y-1 duration-300 hover:drop-shadow-2xl hover:shadow-ziggurat-950 grow">
    <div class="flex flex-row justify-between grow">
      <div class="flex flex-col grow justify-start gap-8">
        <div class="text-2xl font-semibold font-petrov text-ziggurat-500">
          {{ project.title }}
        </div>
        <div class="markup" v-html="project.description"></div>
      </div>
      <img v-if="project.gif" :src="project.gif"
        class="h-40 min-w-32 bg-cover rounded-lg shadow-ziggurat-950 drop-shadow-lg border-ziggurat-400 border"
        alt="Тут должна была быть гифка, подчёркивающая направление проекта" loading="lazy" />
    </div>
    <ProjectTags :tags="project.tags" :selectedTags="selectedTags" />
    <ProjectActions :actions="project.actions" />
  </div>
</template>
<script setup>
import ProjectTags from '@/components/sections/projects/ProjectTags.vue'
import ProjectActions from '@/components/sections/projects/ProjectActions.vue'
defineProps({
  project: {
    image: String,
    description: String,
    gif: String,
    name: String,
    tags: [],
    action: []
  }, selectedTags: {}
})
</script>
