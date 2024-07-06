<script setup>
import { SECTIONS } from '@/data/sections'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import SummarySection from '@/components/SummarySection.vue'
import { OpenGraph, Head, getHead } from '@/data/openGraph'
import { useHead, useSeoMeta } from '@unhead/vue'

// useSeoMeta(OpenGraph)
useHead(getHead('Главная'))
</script>
<template>
  <section class="flex-grow min-h-screen flex flex-row justify-center">
    <div class="flex flex-col justify-center gap-6">
      <h1><span class="letter-highlight">П</span>ривет, подписчики, я Евгений Дмитриевич</h1>
      <div class="mt-10 text-center text-2xl text-ziggurat-600 gap-10 items-baseline">
        Это мой сайт-визитка
      </div>
      <i class="text-4xl fas fa-arrow-down animate-bounce text-center text-ziggurat-500"></i>
    </div>
  </section>

  <SummarySection :section-id="SECTIONS.summary.id" />
  <SkillsSection :section-id="SECTIONS.skills.id" />
  <ProjectsSection :section-id="SECTIONS.projects.id" />
</template>
