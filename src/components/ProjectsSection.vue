<template>
  <section>
    <h2>Мои проекты</h2>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="proj in PROJECTS" :key="proj.name" class="flex flex-col gap-2 justify-between">
        <div class="project-card">
          <div class="project-card-image" :style="{ 'background-image': `url('${proj.image}')` }">
            <div class="project-card-content">
              <div class="project-card-body">
                <div class="project-card-title">
                  {{ proj.name }}
                </div>
                {{ proj.description }}
                <div v-if="proj.tags" class="project-tags-container">
                  <div class="project-tag" v-for="tag in proj.tags" :key="tag">
                    <i :class="tag.icon"></i>
                    {{ tag.name }}
                  </div>
                </div>
              </div>
              <a
                v-for="action in proj.actions"
                :key="action"
                class="btn btn-flat"
                :href="proj.sourceUrl"
              >
                {{ action.title }}
                <i :class="action.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import image1 from '../images/abstract/1.svg'
import image2 from '../images/abstract/2.svg'
import image3 from '../images/abstract/3.svg'
import gif1 from '../images/projects/profile-site.gif'
import gif2 from '../images/projects/tg-bot.gif'
import gif3 from '../images/projects/pizza.gif'

const sourceCodeIcon = 'fas fa-code'
const dummyIcon = 'fa-regular fa-circle hover:fa-solid'
const htmlIcon = 'fab fa-html5'
const PROJECTS = [
  {
    name: 'Мой сайт',
    tags: [
      { name: 'html/css', icon: htmlIcon },
      { name: 'js', icon: 'fa-brands fa-js' },
      { name: 'vue', icon: 'fab fa-vuejs' },
      { name: 'tailwind', icon: dummyIcon },
      { name: 'github-workflow', icon: 'fab fa-github' }
    ],
    image: gif1,
    description: 'Мой сайт про меня',
    actions: [
      {
        title: 'Просмотр',
        url: 'https://yugh78.github.io/sait',
        icon: 'fa-regular fa-eye'
      },
      {
        title: 'Исходный код',
        url: 'https://github.com/yugh78/sait',
        icon: sourceCodeIcon
      }
    ]
  },
  {
    name: 'Телеграм бот',
    tags: [
      { name: 'python', icon: 'fab fa-python' },
      { name: 'vk api', icon: 'fab fa-vk' },
      { name: 'aiogram', icon: dummyIcon }
    ],
    image: gif2,
    actions: [
      {
        title: 'Исходный код',
        url: 'https://github.com/yugh78/telegrambot_lurkopab',
        icon: sourceCodeIcon
      }
    ]
  },
  {
    name: 'Сайт для пиццерии',
    image: gif3,
    tags: [
      {
        name: 'html/css',
        icon: htmlIcon
      },
      {
        name: 'bootstrap',
        icon: 'fab fa-bootstrap'
      }
    ]
  }
]
</script>
