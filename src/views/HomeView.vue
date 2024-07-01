<script setup>
import Card from '../components/Card.vue'
import ProjectCard from '../components/ProjectCard.vue'
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
      <Card v-for="sum in summaries" :key="sum" :img="sum.img" :text="sum.text" />
    </div>
  </section>
  <!-- Skills section -->
  <section>
    <div>
      <h2>Мои навыки</h2>
      <ul class="list-disc">
        <li>
          <h5>tailwind</h5>
          <p>Этот сайт я накидал с использованием tailwind</p>
        </li>
        <li>
          <h5>python</h5>
          <ul class="list-disc ps-7">
            <li>
              <h6>aiogram</h6>
              <p>Разрабатывал телеграм ботов на заказ</p>
            </li>
            <li>
              <h6>django</h6>
              <p>Только трогал</p>
            </li>
          </ul>
        </li>
        <li>
          <h5>css/html</h5>
        </li>
        <li>
          <h5>SQL</h5>
          <p>Знания базовых запросов</p>
        </li>
        <li>
          <h5>Figma</h5>
          <p>Есть аккаунт</p>
        </li>
      </ul>
    </div>
  </section>
  <section>
    <h2>Проекты</h2>
    <div>
      <ProjectCard name="Some" description="My first project" />
    </div>
  </section>
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
