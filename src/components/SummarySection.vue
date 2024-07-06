<script setup>
defineProps({
  sectionId: String
})
import SummaryCard from './SummaryCard.vue'
import me from '../images/me.png'
import me_and_who from '../images/me_and_who.png'
const SUMMARIES = [
  {
    text: 'Cтудент первого курса по направлению программная инженерия ТУ им. А.А. Леонова.',
    img: me
  },
  {
    text: 'Занимаюсь каратэ Киокушинкай 7 лет. Так что могу и... на шпагат сесть.',
    img: me_and_who
  }
]
</script>
<template>
  <section :id="sectionId">
    <h2>Кратко <span class="letter-highlight">о</span>бо мне</h2>
    <div class="card-container">
      <SummaryCard v-for="sum in SUMMARIES" :key="sum" :img="sum.img" :text="sum.text" />
    </div>
  </section>
</template>
