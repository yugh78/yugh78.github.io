import image1 from '@/images/abstract/1.svg'
import image2 from '@/images/abstract/2.svg'
import image3 from '@/images/abstract/3.svg'
import gif1 from '@/images/projects/profile-site.gif'
import gif2 from '@/images/projects/tg-bot.gif'
import gif3 from '@/images/projects/pizza.gif'

const icons = {
  dummy: 'fa-regular fa-circle hover:fa-solid',
  view: 'fa-regular fa-eye',
  sourceCode: 'fas fa-code',
  html: 'fab fa-html5',
  notAvailable: 'fas fa-ban',
  sql: 'fas fa-database'
}
const PROJECTS = [
  {
    name: 'Мой сайт',
    tags: [
      { name: 'html/css', icon: icons.html },
      { name: 'js', icon: 'fa-brands fa-js' },
      { name: 'vue', icon: 'fab fa-vuejs' },
      { name: 'tailwind', icon: icons.dummy },
      { name: 'github-workflow', icon: 'fab fa-github' }
    ],
    image: image1,
    gif: gif1,
    description: 'Мой сайт про меня',
    actions: [
      {
        title: 'Просмотр',
        url: 'https://yugh78.github.io/sait',
        icon: icons.view
      },
      {
        title: 'Исходный код',
        url: 'https://github.com/yugh78/sait',
        icon: icons.sourceCode
      }
    ]
  },
  {
    name: 'Телеграм бот',
    image: image2,
    gif: gif2,
    tags: [
      { name: 'python', icon: 'fab fa-python' },
      { name: 'vk api', icon: 'fab fa-vk' },
      { name: 'sqlite', icon: icons.sql },
      { name: 'aiogram', icon: icons.dummy }
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
    name: 'PizzaExpress',
    description:
      'Совместный проект с <a href="https://github.com/MainMaestro">товарищем</a> для пиццерии',
    image: image3,
    gif: gif3,
    tags: [
      {
        name: 'html/css',
        icon: icons.html
      },
      {
        name: 'bootstrap',
        icon: 'fab fa-bootstrap'
      },
      {
        name: 'dotnet',
        icon: icons.dummy
      },
      {
        name: 'sql',
        icon: icons.sql
      }
    ],
    actions: [
      {
        title: 'Просмотр',
        icon: icons.view,
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
  }
]
export { icons, PROJECTS }