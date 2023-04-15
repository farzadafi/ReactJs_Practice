import { ElementGenerator } from '@/library'
import { svg } from '@/assets/index.js'

export const FirstProductPage = () => {
  return ElementGenerator({
    element: 'div',
    className: 'h-[926px] flex flex-col p-5 gap-4',
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
            className: 'flex gap-3',
            child: [
              ElementGenerator({
                element: 'div',
                className: '',
                innerHTML: svg.offBell
              }),
              ElementGenerator({
                element: 'div',
                className: '',
                innerHTML: svg.outlineHeart
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
            element: 'label',
            htmlFor: 'email-address-id',
            className: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          }),
          ElementGenerator({
            element: 'div',
            className: 'relative',
            child: [
              ElementGenerator({
                element: 'div',
                className: 'absolute inset-y-5 left-0 flex items-center pl-3 pointer-events-none',
                innerHTML: svg.outlineSearch
              })
            ]
          }),
          ElementGenerator({
            element: 'input',
            type: 'text',
            id: 'email-address-input-id',
            className: 'bg-gray-50 border-none text-gray-900 text-lg rounded-lg focus:ring-black focus:ring-2 focus:border-black focus:border-xl block w-full h-10 pl-10 p-2.5',
            placeholder: 'Search'
          })
        ]
      })
    ]
  })
}
