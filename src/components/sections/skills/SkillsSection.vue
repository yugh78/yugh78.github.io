<script setup>
defineProps({
  sectionId: String
})
import { listByTitle } from '@/data'
const data = listByTitle("Мои навыки")
</script>
<template>
  <section :id="sectionId">
    <h2><span class="letter-highlight">М</span>ои навыки</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-5">
      <div v-for="(skill, index) in data.items" :key="index" class="flex">
        <div class="flex grow" data-aos="zoom-in-right" :data-aos-delay="index * 200">

          <div class="skill-card grow transition-all duration-500">
            <div class="skill-card-header">
              <div v-if="skill.iconName" class="skill-card-header-icon">
                <i :class="skill.iconName"></i>
              </div>
              <div class="skill-card-header-text text-ziggurat-600 font-petrov font-semibold">{{ skill.title }}</div>
            </div>
            <p v-if="skill.description" v-html="skill.description" class="skill-card-body"></p>
            <div v-if="skill.items" class="flex flex-col gap-4">
              <div v-for="(sub, index) in skill.items" :key="sub.header" class="skill-subcard" data-aos="zoom-in-right"
                :data-aos-delay="300 + (100 * index)">
                <div class="skill-subcard-header">
                  {{ sub.title }}
                </div>
                <div v-if="sub.description" class="skill-subcard-body">
                  {{ sub.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
