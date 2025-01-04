import me from '@/images/me.png'
import me_and_who from '@/images/me_and_who.png'

import image1 from '@/images/abstract/1.svg'
import image2 from '@/images/abstract/2.svg'
import image3 from '@/images/abstract/3.svg'
import gif1 from '@/images/projects/profile-site.gif'
import gif2 from '@/images/projects/tg-bot.gif'
import gif3 from '@/images/projects/pizza.gif'
import gif4 from '@/images/projects/chill-site.gif'

import { icons } from '@/data/icons'

const codeTags = {
    htmlCss:
        { title: 'html/css', icon: icons.html },
    sql:
        { title: 'sql', icon: icons.sql },
    react: { title: 'react', icon: 'fab fa-react' },
    js:
        { title: 'js', icon: 'fa-brands fa-js' },
    tailwind:
        { title: 'tailwind', icon: icons.dummy },
}

const data = {
    lists: [{
        title: "Кратко обо мне", description: "", items: [
            {
                title: "",
                text: 'Cтудент второго курса по направлению <em>Программная инженерия</em> в ТУ им. А.А. Леонова',
                img: me
            },
            {
                title: "",
                text: 'Занимаюсь каратэ Киокушинкай <em>7 лет</em>. Так что могу и... на шпагат сесть',
                img: me_and_who
            }
        ]
    },
    {
        title: "Мои навыки",
        items: [
            {
                title: 'Tailwind',
                description: 'Этот сайт я накидал с использованием <kbd>tailwind</kbd>',
                iconName: 'fa-brands fa-css3'
            },
            {
                title: 'CSS/HTML',
                iconName: 'fa-brands fa-html5'
            },
            {
                title: 'SQL',
                iconName: 'fa-solid fa-database',
                description: 'Знания базовых запросов <em>(таких как: <kbd>SELECT</kbd>, <kbd>JOIN</kbd>, <kbd>INSERT</kbd>)</em>'
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
                        title: 'django',
                        description: 'Только трогал'
                    }
                ]
            }]
    }, {
        title: "Мои проекты",
        items: [
            {
                title: 'Мой сайт',
                tags: [
                    codeTags.htmlCss,
                    codeTags.js,
                    codeTags.tailwind,
                    { title: 'vue', icon: 'fab fa-vuejs' },
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
                    { title: 'python', icon: 'fab fa-python' },
                    { title: 'vk api', icon: 'fab fa-vk' },
                    { title: 'aiogram', icon: icons.dummy }
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
            },
            {
                title: 'Chill site',
                description: 'Небольшой заказ, выполненный совместно с <a href="https://github.com/katy248">товарищем</a>',
                gif: gif4,
                tags: [codeTags.htmlCss, codeTags.js, codeTags.react, codeTags.tailwind],
                actions: [{
                    icon: icons.view,
                    title: 'Просмотр', disabled: {
                        message: 'Сайт пока не опубликован',
                        icon: icons.notAvailable

                    }
                }, {
                    title: 'Исходный код',
                    url: 'https://gitlab.com/Katy248/chill-site',
                    icon: icons.sourceCode,
                }]
            }

        ]
    }
    ]
};

const listByTitle = (title) => {
    return data.lists.find((item) => item.title === title)
}

export { data, listByTitle };
