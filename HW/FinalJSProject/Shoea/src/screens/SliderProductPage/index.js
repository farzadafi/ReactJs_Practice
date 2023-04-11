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
            ]
          })
        ]
      })
    ]
  })
}
