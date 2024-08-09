<template>
  <section :id="sectionId">
    <h2>М<span class="letter-highlight">о</span>и проекты</h2>
    <Transition leave-active-class="animate__animated animate__fadeOutUp">
      <div v-if="selectedTags.length > 0" class="flex flex-row flex-wrap py-5 gap-2">
        <TransitionGroup leave-active-class="animate__animated animate__fadeOutLeft">
          <div v-for="tag in sortedSelectedTags" data-aos="fade-right"
            class="flex gap-2 items-center uppercase font-petrov select-none bg-ziggurat-400 hover:bg-ziggurat-500 text-ziggurat-50 rounded-full px-1 ps-4 py-1 shadow-ziggurat-900 drop-shadow-lg transition-all duration-300">
            <i :class="tag.icon"></i>
            <div class="ps-2">
              {{ tag.title }}
            </div>
            <button @click="removeTag(tag, selectedTags)"
              class="rounded-full h-8 w-8 hover:bg-ziggurat-50 hover:bg-opacity-70 hover:text-ziggurat-600 active:bg-opacity-90 p-1 flex items-center justify-center transition-all duration-300">
              <i class="fas fa-xmark"></i>
            </button>
          </div>
        </TransitionGroup>
      </div>
    </Transition>
    <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5">
      <TransitionGroup leave-active-class="animate__animated animate__fadeOutLeft">
        <div v-for="(proj, index) in projects" :key="proj.name" class="flex flex-col gap-2 justify-between">
          <div class="flex grow" data-aos="fade-right" :data-aos-delay="index * 200">
            <ProjectCard :project="proj" :selectedTags="selectedTags" />
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>
<script setup>
defineProps({
  sectionId: String
})

import ProjectCard from '@/components/sections/projects/ProjectCard.vue'
import { reactive, computed } from 'vue'

import { listByTitle } from '@/data'

const projectList = listByTitle('Мои проекты')
const selectedTags = reactive([])
const projects = computed(() => {
  if (selectedTags.length == 0) {
    return projectList.items
  }

  return projectList.items.filter((item) => {
    const itemSelectedTags = item.tags.filter(t => { return selectedTags.includes(t) })
    return itemSelectedTags.length == selectedTags.length
  })
})
const removeTag = (tag, selectedTags) => {
  const index = selectedTags.indexOf(tag);

  if (index >= 0) {
    selectedTags.splice(index, 1)
  }

}

const strCompare = (a, b) => {
  if (a[0] < b[0]) return -1;
  else if (a[0] > b[0]) return 1;
  return 0;
}

const sortedSelectedTags = computed(() => {
  return selectedTags.sort(strCompare)
})
</script>
