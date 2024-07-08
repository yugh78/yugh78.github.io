<script setup>
import { SECTIONS } from '@/data/sections'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import SummarySection from '@/components/SummarySection.vue'
import { getHead } from '@/data/openGraph'
import { useHead } from '@unhead/vue'
useHead(getHead('Обо мне'))
</script>

<template>
  <div class="flex flex-col justify-center gap-6">
    <h1 class="font-dela-gothic">
      <span class="letter-highlight">П</span>ривет, подписчики, я Евгений Дмитриевич
    </h1>
    <div class="text-center text-2xl text-ziggurat-600">Это мой сайт-визитка</div>
  </div>
  <SummarySection :section-id="SECTIONS.summary.id" />
  <SkillsSection :section-id="SECTIONS.skills.id" />
  <ProjectsSection :section-id="SECTIONS.projects.id" />
</template>
