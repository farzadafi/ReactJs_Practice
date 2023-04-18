import { ElementGenerator } from '@/library'
import Swiper from 'swiper/bundle'
import { Router } from '@/functions'

const slides = [
  {
    text: 'We provide high quality products just for you',
    src: './src/assets/image/SliderFirstImage.png'
  },
  {
    text: 'Your satisfaction is our number one priority',
    src: './src/assets/image/SliderSecondImage.png'
  },
  {
    text: 'Let’s fulfill your fashion needs with shoea right now!',
    src: './src/assets/image/SliderThirdImage.png'
  }
]

const mySlides = (slide) => {
  return ElementGenerator({
    element: 'div',
    className: 'swiper-slide w-full flex flex-col',
    child: [
      ElementGenerator({
        element: 'div',
        className: 'w-full overflow-hidden',
        child: [
          ElementGenerator({
            element: 'img',
            className: 'w-full h-full',
            src: slide.src
          })
        ]
      }),
      ElementGenerator({
        element: 'div',
        className: 'w-full flex items-center justify-center',
        child: [
          ElementGenerator({
            element: 'span',
            className:
                'w-full px-4 py-4 text-center text-black text-[28px] font-semibold mx-1',
            innerText: slide.text
          })
        ]
      })
    ]
  })
}

const configSwiper = () => {
  // eslint-disable-next-line no-new
  new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination'
    },
    allowTouchMove: true
  })
}

export const SliderProductPage = () => {
  setTimeout(configSwiper, 0)
  return ElementGenerator({
    element: 'div',
    id: 'first-slider',
    className:
        'w-full h-full pb-4 flex flex-col items-center justify-end tall:justify-between transition ease-linear duration-500 transform',
    child: [
      ElementGenerator({
        element: 'div',
        className: 'w-full swiper',
        child: [
          ElementGenerator({
            element: 'div',
            className: 'swiper-wrapper mb-10',
            child: [
              ...slides.map((item) => {
                return mySlides(item)
              })
            ]
          }),
          ElementGenerator({
            element: 'div',
            className: 'swiper-pagination'
          })
        ]
      }),
      ElementGenerator({
        element: 'div',
        className: 'w-full text-center mt-8 px-4',
        child: [
          ElementGenerator({
            element: 'button',
            className: 'w-full bg-black p-4 text-white rounded-full',
            child: 'Next',
            eventListener: [
              {
                event: 'click',
                callback: (e) => {
                  const swiper = document.querySelector('.swiper').swiper
                  swiper.slideNext()
                  if (e.target.innerText === 'Get Started') {
                    Router().navigate('/login')
                  }
                  swiper.activeIndex === 2
                    ? (e.target.innerText = 'Get Started')
                    : null
                }
              }
            ]
          })
        ]
      })
    ]
  })
}
