<template>
  <section :id="sectionId">
    <h2>М<span class="letter-highlight">о</span>и проекты</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div v-for="proj in PROJECTS" :key="proj.name" class="flex flex-col gap-2 justify-between">
        <div class="project-card">
          <div class="project-card-image" :style="{ 'background-image': `url('${proj.image}')` }">
            <div class="project-card-content">
              <div class="project-card-body">
                <div class="project-card-body-content">
                  <div class="project-card-body-text">
                    <div class="project-card-title">
                      {{ proj.name }}
                    </div>
                    <div class="markup" v-html="proj.description"></div>
                    <ProjectTagsContainer :tags="proj.tags" />
                  </div>
                  <img
                    :src="proj.gif"
                    class="h-40 min-w-32 bg-cover rounded-lg shadow-ziggurat-950 drop-shadow-sm border-ziggurat-400 border"
                    alt="Тут должна была быть гифка, подчёркивающая направление проекта"
                    loading="lazy"
                  />
                </div>
              </div>
              <ProjectActions :actions="proj.actions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  sectionId: String
})

import ProjectTagsContainer from '@/components/sections/projects/ProjectTags.vue'
import ProjectActions from '@/components/sections/projects/ProjectActions.vue'

import { PROJECTS } from '@/data/projects'
</script>
