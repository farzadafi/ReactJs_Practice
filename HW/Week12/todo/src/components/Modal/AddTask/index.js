import elementGenerator from '@/library/elementGenerator.js'
import { svg } from '@/assets/svgs/index.js'

const priorityList = ['Low', 'Medium', 'high']

const AddTask = () => {
  return elementGenerator({
    element: 'div',
    className: 'fixed w-5/12 h-3/5 bg-green-500 top-[20%] left-[30%] rounded-md',
    child: [
      elementGenerator({
        element: 'header',
        child: [
          elementGenerator({
            element: 'p',
            className: 'm-4 text-2xl',
            child: 'New Task'
          }),
          elementGenerator({
            element: 'hr'
          })
        ]
      }),
      elementGenerator({
        element: 'main',
        className: '',
        child: [
          elementGenerator({
            element: 'div',
            className: '',
            child: [
              elementGenerator({
                element: 'fieldset',
                className: 'border m-4 h-16 rounded focus-within:border-[#7926ed]',
                child: elementGenerator({
                  element: 'legend',
                  className: 'ml-4 text-gray-100 p-1 flex flex-col focus-within:text-[#7926ed]',
                  child: ['Task Name',
                    elementGenerator({
                      element: 'label',
                      for: 'taskName'
                    }),
                    elementGenerator({
                      element: 'input',
                      className: 'absolute top-[6.0rem] left-[1rem] w-[47.5rem] h-12 bg-opacity-0 p-5 bg-green-500 outline-none',
                      id: 'taskName'
                    })]
                })
              }),
              elementGenerator({
                element: 'div',
                className: 'p-4 text-xl',
                child: [
                  elementGenerator({
                    element: 'div',
                    className: 'relative inline-block border rounded w-44 h-12 hover:cursor-pointer',
                    child: [
                      elementGenerator({
                        element: 'div',
                        className: 'flex justify-between items-center p-[.70rem]',
                        child: [
                          elementGenerator({
                            element: 'p',
                            className: '',
                            child: 'priority'
                          }),
                          elementGenerator({
                            element: 'span',
                            className: '',
                            innerHTML: svg.CaretDownFill
                          })
                        ]
                      }),
                      elementGenerator({
                        element: 'div',
                        className: 'hidden absolute min-w-max shadow-2xl bg-white rounded mt-1 w-44',
                        child: priorityList.map(s => elementGenerator({
                          element: 'a',
                          className: 'block hover:cursor-pointer hover:bg-[#f5f5f2] p-1 active:bg-[#d9d5e6]',
                          child: s
                        }))
                      })
                    ]
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

export default AddTask
