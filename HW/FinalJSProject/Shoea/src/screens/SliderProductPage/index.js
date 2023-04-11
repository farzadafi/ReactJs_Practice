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
            className: 'relative h-56 overflow-hidden rounded-lg md:h-96',
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
                    className: 'absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
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
