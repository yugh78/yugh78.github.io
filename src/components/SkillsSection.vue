<script setup>
defineProps({
  sectionId: String
})
const SKILLS = [
  {
    header: 'Tailwind',
    description: 'Этот сайт я накидал с использованием <kbd>tailwind</kbd>',
    iconName: 'fa-brands fa-css3'
  },

  {
    header: 'CSS/HTML',
    iconName: 'fa-brands fa-html5'
  },
  {
    header: 'SQL',
    iconName: 'fa-solid fa-database',
    description: 'Знания базовых запросов (<kbd>SELECT</kbd>, <kbd>JOIN</kbd>, <kbd>INSERT</kbd>)'
  },
  {
    header: 'Figma',
    iconName: 'fa-brands fa-figma',
    description: 'Есть аккаунт'
  },
  {
    header: 'Python',
    iconName: 'fa-brands fa-python',
    subSkills: [
      {
        header: 'aiogram',
        description: 'Разрабатывал телеграм ботов на заказ'
      },
      {
        header: 'django',
        description: 'Только трогал'
      }
    ]
  }
]
</script>
<template>
  <section>
    <h2>Мои навыки</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4"
    >
      <div v-for="skill in SKILLS" :key="skill" class="flex">
        <div class="skill-card grow">
          <div class="skill-card-header">
            <div v-if="skill.iconName" class="skill-card-header-icon">
              <i :class="skill.iconName"></i>
            </div>
            <div class="skill-card-header-text">{{ skill.header }}</div>
          </div>
          <p v-if="skill.description" v-html="skill.description" class="skill-card-body"></p>
          <div v-if="skill.subSkills" class="flex flex-col gap-4">
            <div v-for="sub in skill.subSkills" :key="sub.header" class="skill-subcard">
              <div class="skill-subcard-header">
                {{ sub.header }}
              </div>
              <div v-if="sub.description" class="skill-subcard-body">
                {{ sub.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
