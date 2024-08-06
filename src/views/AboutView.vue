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
  <div class="flex flex-col justify-center gap-6">
    <h1 class="font-dela-gothic">
      <span class="letter-highlight">П</span>ривет, подписчики, я Евгений Дмитриевич
    </h1>
    <div class="text-center text-2xl text-ziggurat-600">Это мой сайт-визитка</div>
  </div>
  <div class="flex flex-col gap-36 sm:mb-56">

    <SummarySection :section-id="SECTIONS.summary.id" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
    <SkillsSection :section-id="SECTIONS.skills.id" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
    <ProjectsSection :section-id="SECTIONS.projects.id" data-aos="fade-up" data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom" />
  </div>
</template>
