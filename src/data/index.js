import me from '@/images/me.png'
import me_and_who from '@/images/me_and_who.png'
import stan from '@/images/stanreverse.gif'

import image1 from '@/images/abstract/1.svg'
import image2 from '@/images/abstract/2.svg'
import image3 from '@/images/abstract/3.svg'
import gif1 from '@/images/projects/profile-site.gif'
import gif2 from '@/images/projects/tg-bot.gif'
import gif3 from '@/images/projects/pizza.gif'
import gif4 from '@/images/projects/chill-site.gif'
import sirRabbitGif from '@/images/projects/sir-rabbit.gif'

import { icons } from '@/data/icons'

const codeTags = {
  htmlCss: { title: 'html/css', icon: icons.html },
  sql: { title: 'sql', icon: icons.sql },
  react: { title: 'react', icon: 'fab fa-react' },
  js: { title: 'js', icon: 'fa-brands fa-js' },
  tailwind: { title: 'tailwind', icon: icons.dummy },
  vue: { title: 'vue', icon: 'fab fa-vuejs' },
  python: { title: 'python', icon: 'fab fa-python' },
  nuxt: { title: 'nuxt', icon: icons.dummy },
  ts: { title: 'ts', icon: icons.dummy },
  directus: {
    title: 'directus',
    icon: icons.dummy
  },
  docker: {
    title: 'docker',
    icon: 'fab fa-docker'
  }
}

const data = {
  lists: [
    {
      title: 'Кратко обо мне',
      description: '',
      items: [
        {
          title: '',
          text: 'Cтудент третьего курса по направлению <em>Программная инженерия</em> в ТУ им. А.А. Леонова',
          img: me
        },
        {
          title: '',
          text: 'Профессионально занимаюсь каратэ Киокушинкай, имею черный пояс 1 дан.',
          img: me_and_who
        },
        {
          title: '',
          text: 'Силовые: <ul> <li>жим лежа 135кг,</li> <li>присед 150кг,</li> <li>становая тяга 160кг на гвоздях.</li> </ul>',
          img: stan
        }
      ]
    },
    {
      title: 'Мои навыки',
      items: [
        {
          title: 'Tailwind CSS',
          description: 'Этот сайт я накидал с использованием <kbd>tailwind</kbd>',
          iconName: 'fa-brands fa-css3'
        },
        {
          title: 'HTML/CSS',
          iconName: 'fa-brands fa-html5',
          description: 'Адаптивная вёрстка, оформление страниц и построение структуры интерфейсов.'
        },
        {
          title: 'SQL',
          iconName: 'fa-solid fa-database',
          description:
            'Базовые запросы и работа с данными.'
        },
        {
          title: 'Figma',
          iconName: 'fa-brands fa-figma',
          description: 'Есть аккаунт'
        },
        {
          title: 'Python',
          iconName: 'fa-brands fa-python',
          items: [
            {
              title: 'aiogram',
              description: 'Разрабатывал телеграм ботов на заказ'
            },
            {
              title: 'Django',
              description: 'Только трогал'
            }
          ]
        },
        { 
          title: 'Vue.js',
          iconName: 'fa-brands fa-vuejs',
          description: 'Основной инструмент для создания интерфейсов. На Vue разработан этот сайт-визитка.',
        },
        {
          title: 'React',
          iconName: 'fa-brands fa-react',
          description: 'Есть опыт создания компонентов и интерфейсов на React.'
        },
        {
          title: 'Nuxt',
          iconName: icons.dummy,
          description: 'Работал с проектами на Nuxt и компонентной структурой приложений.'
        },
        {
          title: 'TypeScript',
          iconName: icons.dummy,
        },
        {
          title: 'Directus',
          iconName: icons.dummy,
          description: 'Использовал как backend/CMS для управления данными проекта.'
        },
        {
          title: 'Docker',
          iconName: 'fab fa-docker',
          description: 'Запускал и настраивал окружение для веб-проектов в контейнерах.'
        },
        {
          title: 'GitHub Actions',
          iconName: 'fab fa-github',
          description: 'Настраивал CI/CD пайплайны для автоматизации сборки и деплоя проектов.'
        }
      ]
    },
    {
      title: 'Мои проекты',
      items: [
        {
          title: 'Мой сайт',
          tags: [
            codeTags.htmlCss,
            codeTags.js,
            codeTags.tailwind,
            codeTags.vue,
            { title: 'github-workflow', icon: 'fab fa-github' }
          ],
          image: image1,
          gif: gif1,
          description: 'Мой сайт про меня',
          actions: [
            {
              title: 'Просмотр',
              url: 'https://yugh78.github.io',
              icon: icons.view
            },
            {
              title: 'Исходный код',
              url: 'https://github.com/yugh78/yugh78.github.io',
              icon: icons.sourceCode
            }
          ]
        },
        {
          title: 'Телеграм бот',
          image: image2,
          gif: gif2,
          tags: [
            codeTags.sql,
            codeTags.python,
            { title: 'vk api', icon: 'fab fa-vk' },
            { title: 'aiogram', icon: icons.telegram }
          ],
          actions: [
            {
              title: 'Исходный код',
              url: 'https://github.com/yugh78/telegrambot_lurkopab',
              icon: icons.sourceCode
            }
          ]
        },
        {
          title: 'PizzaExpress',
          description:
            'Совместный проект с <a href="https://github.com/MainMaestro">товарищем</a> для пиццерии',
          image: image3,
          gif: gif3,
          tags: [
            codeTags.htmlCss,
            codeTags.sql,
            {
              title: 'bootstrap',
              icon: 'fab fa-bootstrap'
            },
            { title: 'dotnet', icon: icons.dummy }
          ],
          actions: [
            {
              title: 'Просмотр',
              icon: icons.viewDisabled,
              disabled: {
                message: 'Заказчик поменял дизайн',
                icon: icons.notAvailable
              }
            },
            {
              title: 'Исходный код',
              icon: icons.sourceCode,
              url: 'https://github.com/MainMaestro/PizzaExpress'
            }
          ]
        },
        {
          title: 'Chill site',
          description:
            'Небольшой заказ, выполненный совместно с <a href="https://github.com/katy248">товарищем</a>',
          gif: gif4,
          tags: [codeTags.htmlCss, codeTags.js, codeTags.react, codeTags.tailwind],
          actions: [
            {
              icon: icons.viewDisabled,
              title: 'Просмотр',
              disabled: {
                message: 'Сайт пока не опубликован',
                icon: icons.notAvailable
              }
            },
            {
              title: 'Исходный код',
              url: 'https://gitlab.com/Katy248/chill-site',
              icon: icons.sourceCode
            }
          ]
        },
        {
          title: 'Сайт для ресторана',
          description:
            'Сайт для ресторана, который я делал совместно с <a href=https://github.com/katy248>товарищем</a>. Сайт был сделан на nuxt, с использованием directus в качестве бэкенда и docker для деплоя.',
          gif: sirRabbitGif,
          tags: [
            codeTags.htmlCss,
            codeTags.tailwind,
            codeTags.vue,
            codeTags.nuxt,
            codeTags.ts,
            codeTags.directus,
            codeTags.docker
          ],
          actions: [
            {
              icon: icons.view,
              title: 'Просмотр',
              url: 'https://sir-rabbit.ru'
            },
            {
              title: 'Исходный код',
              url: 'https://github.com/sir-rabbit-restaurant/sir-rabbit-frontend',
              icon: icons.sourceCode
            }
          ]
        }
      ]
    }
  ]
}

const listByTitle = (title) => {
  return data.lists.find((item) => item.title === title)
}

export { data, listByTitle }
