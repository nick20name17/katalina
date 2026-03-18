export type Language = 'en' | 'ua'

export const translations = {
  common: {
    buy: {
      en: 'Buy Now',
      ua: 'Придбати'
    },
    promoPlaceholder: {
      en: 'promo code',
      ua: 'промокод'
    },
    promoInvalid: {
      en: 'Invalid promo code',
      ua: 'Промокод не вірний'
    },
    promoRequired: {
      en: 'Enter promo code',
      ua: 'Введіть промокод'
    },
    currency: {
      en: '$',
      ua: 'грн'
    }
  },
  book: {
    title: {
      en: "Creators' Sacred Book",
      ua: "Creators' Sacred Book"
    },
    subtitle: {
      en: ['secrets of visual', 'development and content', 'creation'],
      ua: ['секрети візуального', 'розвитку та створення', 'контенту']
    },
    author1Role: {
      en: 'content creator, art director',
      ua: 'контент-креаторка, артдиректорка'
    },
    author2Role: {
      en: 'content creator, video editor',
      ua: 'контент-креаторка, монтажерка'
    },
    whatIncluded: {
      en: "What's included:",
      ua: 'Що входить у файл:'
    },
    features: {
      en: [
        '01. How to work with references, not just save them',
        '02. How to look at a frame: light, depth, movement, pause',
        '03. How to understand why a reference catches your eye',
        '04. How not to copy, but to interpret',
        '05. Trends vs timeless style',
        '06. Which trends can be used without harm',
        '07. Why blindly following trends kills style',
        '08. How to work when there is no inspiration',
        '09. Collection of seasonal references'
      ],
      ua: [
        '01. Як працювати з референсами, а не просто зберігати',
        '02. Як дивитись на кадр: світло, глибина, рух, пауза',
        '03. Як зрозуміти, чому референс чіпляє',
        '04. Як не копіювати, а інтерпретувати',
        '05. Тренди vs позачасовий стиль',
        '06. Які тренди можна використовувати без шкоди',
        '07. Чому сліпе слідування трендам вбиває стиль',
        '08. Як працювати, коли немає натхнення',
        '09. Збірка сезонних референсів'
      ]
    },
    buyButton: {
      en: 'Buy Now',
      ua: 'Придбати'
    },
    forYouIf: {
      en: 'This book is for you if:',
      ua: 'Ця книга для тебе, якщо:'
    },
    targetAudience: {
      en: [
        "- you regularly catch yourself thinking \"no ideas\" when you need to shoot something",
        "- you're tired of saving chaotic references but never using them",
        '- you want your content to look cohesive and atmospheric',
        '- you want to develop your own style, not copy someone else\'s',
        '- you want to learn to see beauty in simple things and use it in content',
        '- you want to have ready ideas for each season, so you don\'t have to invent from scratch',
        '- you want to create content that people want to save',
        '- you work with content — or want to start',
        '- and you feel that there is more in you than you are currently showing'
      ],
      ua: [
        '- ти регулярно ловиш себе на думці «немає ідей», коли потрібно щось зняти',
        '- ти втомилась зберігати хаотичні референси, але так і не використовувати їх',
        '- ти хочеш, щоб контент виглядав цілісно та атмосферно',
        '- ти прагнеш виробити власний стиль, а не копіювати чужий',
        '- ти хочеш навчитися бачити красу в простих речах і використовувати це в контенті',
        '- ти хочеш мати готові ідеї для кожного сезону, щоб не вигадувати з нуля',
        '- ти хочеш знімати контент, який хочеться зберегти',
        '- ти працюєш з контентом — або хочеш почати',
        '- і відчуваєш, що в тобі є більше, ніж ти зараз показуєш'
      ]
    },
    buySection: {
      description: {
        en: 'And now you can grab these tips and turn your ideas into authentic content',
        ua: 'І тепер ти можеш отримати ці поради та перетворити свої ідеї на автентичний контент'
      },
      comment: {
        en: "Access to «Creators' Sacred Book»",
        ua: "Доступ до  «Creators' Sacred Book»"
      }
    },
    faq: {
      title: {
        en: 'FAQ',
        ua: 'FAQ'
      },
      questions: {
        en: [
          {
            question: 'When will I receive the book?',
            answer: 'After payment, the book will be immediately downloaded to your device'
          },
          {
            question: 'What format is the book in?',
            answer: 'In a convenient PDF format'
          }
        ],
        ua: [
          {
            question: 'Коли я отримаю книгу?',
            answer: 'Після оплати книга відразу буде скачана на ваш пристрій'
          },
          {
            question: 'В якому форматі книга?',
            answer: 'У зручному PDF форматі'
          }
        ]
      }
    }
  }
} as const
