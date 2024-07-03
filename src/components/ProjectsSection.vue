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
                  <div class="project-tag" v-for="tag in proj.tags" :key="tag">{{ tag.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="btn btn-flat" v-if="proj.sourceUrl" :href="proj.sourceUrl">
          Исходный код
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import image1 from '../images/abstract/1.svg'
import image2 from '../images/abstract/2.svg'
const PROJECTS = [
  {
    name: 'Мой сайт',
    tags: [
      { name: 'html/css', icon: '' },
      { name: 'js' },
      { name: 'vue' },
      { name: 'github-workflow' }
    ],
    sourceUrl: 'https://github.com/yugh78/sait',
    image: image1,
    description: 'Мой сайт про меня'
  },
  {
    name: 'Телеграм бот',
    tags: [{ name: 'python' }, { name: 'aiogram' }],
    sourceUrl: 'https://github.com/yugh78/sait',
    image: image2
  }
]
</script>
