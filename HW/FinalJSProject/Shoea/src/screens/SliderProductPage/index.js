import { ElementGenerator } from '@/library'

export const SliderProductPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'h-[926px]',
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
          })
        ]
      })
    ]
  })
}
