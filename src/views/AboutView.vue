<script setup lang="js">
import { SECTIONS } from '@/data/sections'
import ProjectsSection from '@/components/sections/projects/ProjectsSection.vue'
import SkillsSection from '@/components/sections/skills/SkillsSection.vue'
import SummarySection from '@/components/sections/summary/SummarySection.vue'
import { getHead } from '@/data/openGraph'
import { useHead } from '@unhead/vue'
useHead(getHead('Обо мне'))

import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();
</script>

<template>
  <div class="flex flex-col justify-center gap-6 my-20">
    <h1 class="font-petrov">
      <span class="letter-highlight">П</span>ривет, подписчики, я Евгений Дмитриевич
    </h1>
    <div class="text-center text-2xl text-ziggurat-500">Это мой сайт-визитка</div>
  </div>
  <div class="flex flex-col gap-36">

    <SummarySection :section-id="SECTIONS.summary.id" data-aos-anchor-placement="center-bottom" />
    <SkillsSection :section-id="SECTIONS.skills.id" data-aos-anchor-placement="center-bottom" />
    <ProjectsSection :section-id="SECTIONS.projects.id" data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom" />
  </div>
</template>
