import preview from '@/images/preview.png'
const TITLE = 'Чепуха OFFICIAL'
const DESCRIPTION = 'Привет подписчики, я Евгений Дмитриевич! Это мой сайт-визитка'
const Head = {
  title: TITLE,
  meta: [
    {
      property: 'og:image',
      content: 'https://' + window.location.host + preview
    },
    {
      property: 'og:url',
      content: 'https://yugh78.github.io/sait/'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:description',
      content: DESCRIPTION
    },
    {
      property: 'description',
      content: DESCRIPTION
    },
    {
      property: 'og:title',
      content: TITLE
    }
  ]
}
const OpenGraph = {
  title: TITLE,
  ogTitle: TITLE,
  description: DESCRIPTION,
  ogDescription: DESCRIPTION,
  ogImage: preview
}

const getHead = (title, description = DESCRIPTION) => {
  const head = Head
  ;(head.title = title + ' | ' + TITLE), (head.description = description)
  return head
}
export { OpenGraph, Head, getHead }
