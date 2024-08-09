<script setup>
defineProps({
  sectionId: String
})
import SummaryCard from '@/components/sections/summary/SummaryCard.vue'
import { listByTitle } from '@/data'

const data = listByTitle("Кратко обо мне");
</script>
<template>
  <section :id="sectionId">
    <h2>Кратко <span class="letter-highlight">о</span>бо мне</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 2xl:grid-cols-3">
      <div v-for="(sum, index) in data.items" :key="sum" data-aos="zoom-in-right" :data-aos-delay="index * 300">

        <SummaryCard :img="sum.img" :text="sum.text" />
      </div>
    </div>
  </section>
</template>
