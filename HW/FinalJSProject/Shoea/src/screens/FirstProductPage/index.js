import { ElementGenerator } from '@/library'
import { svg } from '@/assets/index.js'

export const FirstProductPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'h-[926px] flex flex-col p-5',
    child: [
      ElementGenerator({
        element: 'div',
        className: 'flex justify-between items-center',
        child: [
          ElementGenerator({
            element: 'div',
            className: 'flex gap-4',
            child: [
              ElementGenerator({
                element: 'div',
                className: '',
                child: [
                  ElementGenerator({
                    element: 'img',
                    className: 'w-12 rounded-full',
                    src: './src/assets/image/farzadProf.jpg'
                  })
                ]
              }),
              ElementGenerator({
                element: 'div',
                className: 'flex flex-col gap-2',
                child: [
                  ElementGenerator({
                    element: 'div',
                    className: 'flex gap-2 items-center',
                    child: [
                      ElementGenerator({
                        element: 'p',
                        className: 'text-gray-500',
                        child: 'Good Morning'
                      }),
                      ElementGenerator({
                        element: 'img',
                        className: 'w-4 h-4',
                        src: './src/assets/image/WavingHandIcon.png'
                      })
                    ]
                  }),
                  ElementGenerator({
                    element: 'p',
                    className: 'text-base font-bold',
                    child: 'Farzad Afshar Zarandi'
                  })
                ]
              })
            ]
          }),
          ElementGenerator({
            element: 'div',
            className: '',
            child: [
              ElementGenerator({
                element: 'div',
                className: '',
                innerHTML: svg.offBell
              })
            ]
          })
        ]
      })
    ]
  })
}
