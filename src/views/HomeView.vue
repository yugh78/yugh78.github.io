<script setup>
import SummaryCard from '../components/SummaryCard.vue'
import SkillsSection from '../components/SkillsSection.vue'
</script>
<template>
  <!-- Page header -->
  <hgroup class="pb-10">
    <h1><span class="letter-highlight">П</span>ривет подписчики, я Евгений Дмитриевич</h1>
    <div class="text-center text-3xl font-amatic font-black">
      Это мой сайт-визитк<span class="letter-highlight">а</span>
    </div>
  </hgroup>
  <!-- Summary section -->
  <section>
    <h2>Кратко <span class="letter-highlight">о</span>бо мне</h2>
    <div class="card-container">
      <SummaryCard v-for="sum in summaries" :key="sum" :img="sum.img" :text="sum.text" />
    </div>
  </section>
  <!-- Skills section -->
  <SkillsSection />
</template>
<script>
import me from '../images/me.png'
import me_and_who from '../images/me_and_who.png'
const summaries = [
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
