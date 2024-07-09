<template>
  <div class="project-card">
    <div class="project-card-image" :style="{ 'background-image': `url('${project.image}')` }">
      <div class="project-card-content">
        <div class="project-card-body">
          <div class="project-card-body-content">
            <div class="project-card-body-text">
              <div class="project-card-title">
                {{ project.name }}
              </div>
              <div class="markup" v-html="project.description"></div>
              <ProjectTagsContainer :tags="project.tags" />
            </div>
            <img
              :src="project.gif"
              class="h-40 min-w-32 bg-cover rounded-lg shadow-ziggurat-950 drop-shadow-sm border-ziggurat-400 border"
              alt="Тут должна была быть гифка, подчёркивающая направление проекта"
              loading="lazy"
            />
          </div>
        </div>
        <ProjectActions :actions="project.actions" />
      </div>
    </div>
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
