<script setup>
import SECTIONS from '@/data/sections'
import ProjectsSection from '@/components/ProjectsSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import SummarySection from '@/components/SummarySection.vue'
import { OpenGraph, Head, getHead } from '@/data/openGraph'
import { useHead, useSeoMeta } from '@unhead/vue'

// useSeoMeta(OpenGraph)
useHead(getHead('Главная'))
</script>
<template>
  <!-- Page header -->
  <hgroup class="md:pb-10">
    <h1><span class="letter-highlight">П</span>ривет подписчики, я Евгений Дмитриевич</h1>
    <div class="text-center text-3xl font-amatic font-black">
      Это мой сайт-визитк<span class="letter-highlight">а</span>
    </div>
  </hgroup>

  <SummarySection />
  <SkillsSection />
  <ProjectsSection />
</template>
