import { ElementGenerator } from '@/library'
import { svg } from '@/assets/index.js'

const brand = [
  {
    name: 'Nike',
    image: './src/assets/image/brand/nike.png'
  }, {
    name: 'Adidas',
    image: './src/assets/image/brand/adidas.png'
  }, {
    name: 'Asics',
    image: './src/assets/image/brand/asics.png'
  }, {
    name: 'Converse',
    image: './src/assets/image/brand/converse.png'
  }, {
    name: 'NewBa..',
    image: './src/assets/image/brand/newBa...png'
  }, {
    name: 'Puma',
    image: './src/assets/image/brand/puma.png'
  }, {
    name: 'Reebok',
    image: './src/assets/image/brand/rebook.png'
  },
  {
    name: 'More...',
    image: './src/assets/image/brand/more.png'
  }
]

const newBrand = brand.map(item => {
  if (item.name === 'More...') {
    return { ...item, name: 'All' }
  }
  return item
})
newBrand.reverse()

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
      }),
      ElementGenerator({
        element: 'div',
        className: 'flex gap-8 flex-wrap',
        child:
          brand.map(items => {
            return ElementGenerator({
              element: 'div',
              className: 'flex flex-col gap-4',
              child: [
                ElementGenerator({
                  element: 'div',
                  className: 'w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center',
                  child: [
                    ElementGenerator({
                      element: 'img',
                      className: '',
                      src: items.image
                    })
                  ]
                }),
                ElementGenerator({
                  element: 'p',
                  className: 'text-center text-md font-semibold',
                  innerHTML: items.name
                })
              ]
            })
          })
      }),
      ElementGenerator({
        element: 'div',
        className: 'flex flex-col gap-4',
        child: [
          ElementGenerator({
            element: 'div',
            className: 'flex justify-center justify-between items-center',
            child: [
              ElementGenerator({
                element: 'p',
                className: 'text-xl font-semibold',
                child: 'Most Popular'
              }),
              ElementGenerator({
                element: 'p',
                className: 'text-base font-semibold',
                child: 'See All'
              })
            ]
          }),
          ElementGenerator({
            element: 'div',
            className: 'flex gap-2 overflow-x-scroll',
            child:
              newBrand.map(items => {
                return ElementGenerator({
                  element: 'div',
                  className: 'border p-2 px-4 border-black border-2 rounded-full max-w-content min-w-20 text-base font-semibold',
                  child: items.name
                })
              })
          })
        ]
      })
    ]
  })
}
