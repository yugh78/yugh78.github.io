<template>
  <div
    class="rounded-xl flex flex-col justify-between gap-3 border bg-ziggurat-200 min-h-40 shadow-ziggurat-500 border-ziggurat-500 drop-shadow-sm transition-all p-6 hover:-translate-y-1 duration-300 hover:drop-shadow-2xl hover:shadow-ziggurat-950 grow"
  >
    <div class="project-card-body-content grow">
      <div class="project-card-body-text">
        <div class="text-2xl font-bold">
          {{ project.name }}
        </div>
        <div class="markup text-ziggurat-700" v-html="project.description"></div>
        <ProjectTagsContainer :tags="project.tags" />
      </div>
      <img
        v-if="project.gif"
        :src="project.gif"
        class="h-40 min-w-32 bg-cover rounded-lg shadow-ziggurat-950 drop-shadow-sm border-ziggurat-400 border"
        alt="Тут должна была быть гифка, подчёркивающая направление проекта"
        loading="lazy"
      />
    </div>
    <ProjectActions :actions="project.actions" />
  </div>
</template>
<script setup>
import ProjectTagsContainer from '@/components/sections/projects/ProjectTags.vue'
import ProjectActions from '@/components/sections/projects/ProjectActions.vue'
defineProps({
  project: {
    image: String,
    description: String,
    gif: String,
    name: String,
    tags: [],
    action: []
  }
})
</script>
