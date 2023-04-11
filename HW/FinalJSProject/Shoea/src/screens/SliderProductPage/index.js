import { ElementGenerator } from '@/library'

export const SliderProductPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'h-[926px] bg-gray-400',
    child: [
      ElementGenerator({
        element: 'div',
        id: 'default-carousel',
        className: 'relative w-full',
        restAttrs: {
          'data-carousel': 'slide'
        },
        child: [
          ElementGenerator({
            element: 'div',
            className: 'relative h-[657px] overflow-hidden',
            child: [
              ElementGenerator({
                element: 'div',
                className: 'hidden duration-700 ease-in-out',
                restAttrs: {
                  'data-carousel-item': ''
                },
                child: [
                  ElementGenerator({
                    element: 'img',
                    src: './src/assets/image/SliderFirstImage.png',
                    alt: '...'
                  }),
                  ElementGenerator({
                    element: 'p',
                    className: 'text-[32px] font-semibold text-center mt-4',
                    child: 'We provide high quality products just for you'
                  })
                ]
              }),
              ElementGenerator({
                element: 'div',
                className: 'hidden duration-700 ease-in-out',
                restAttrs: {
                  'data-carousel-item': ''
                },
                child: [
                  ElementGenerator({
                    element: 'img',
                    src: './src/assets/image/SliderSecondImage.png',
                    alt: '...'
                  })
                ]
              }),
              ElementGenerator({
                element: 'div',
                className: 'hidden duration-700 ease-in-out',
                restAttrs: {
                  'data-carousel-item': ''
                },
                child: [
                  ElementGenerator({
                    element: 'img',
                    src: './src/assets/image/SliderThirdImage.png',
                    alt: '...'
                  })
                ]
              })
            ]
          }),
          ElementGenerator({
            element: 'div',
            className: 'absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2',
            child: [
              ElementGenerator({
                element: 'button',
                type: 'button',
                className: 'w-8 h-1 rounded-full',
                restAttrs: {
                  'aria-current': 'true',
                  'aria-label': 'Slide 1',
                  'data-carousel-slide-to': '0'
                }
              }),
              ElementGenerator({
                element: 'button',
                type: 'button',
                className: 'w-8 h-1 rounded-full ',
                restAttrs: {
                  'aria-current': 'true',
                  'aria-label': 'Slide 1',
                  'data-carousel-slide-to': '1'
                }
              })
            ]
          })
        ]
      })
    ]
  })
}
