import elementGenerator from '@/library/elementGenerator.js'
import { svg } from '@/assets/svgs/index.js'

const priorityList = ['Low', 'Medium', 'High']
const statusList = ['Todo', 'Doing', 'Done']

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
              }), elementGenerator({
                element: 'div',
                className: 'flex',
                child: [
                  elementGenerator({
                    element: 'div',
                    className: 'p-4 text-xl',
                    child: [
                      elementGenerator({
                        element: 'div',
                        className: 'relative inline-block border rounded w-44 h-12 hover:cursor-pointer',
                        id: 'generalDivPriority',
                        onmouseleave: (e) => {
                          const priorityDiv = document.getElementById('priorityDiv')
                          const span = e.target.querySelector('span')
                          const generalDivPriority = document.getElementById('generalDivPriority')
                          let priorityDivClass = priorityDiv.className
                          priorityDivClass = priorityDivClass.replace('block', 'hidden')
                          generalDivPriority.className = generalDivPriority.className.replace('border-[#7926ed]', '')
                          span.innerHTML = svg.CaretDownFill
                          priorityDiv.className = priorityDivClass
                          priorityDiv.className = priorityDivClass
                        },
                        child: [
                          elementGenerator({
                            element: 'div',
                            id: 'prioritySelect',
                            className: 'z-0 flex justify-between items-center',
                            onclick: (e) => {
                              const priorityDiv = document.getElementById('priorityDiv')
                              const span = e.target.querySelector('span')
                              const generalDivPriority = document.getElementById('generalDivPriority')
                              let priorityDivClass = priorityDiv.className
                              if (priorityDivClass.match('hidden')) {
                                priorityDivClass = priorityDivClass.replace('hidden', 'block')
                                span.innerHTML = svg.CaretUpFill
                                generalDivPriority.className = generalDivPriority.className + ' border-[#7926ed]'
                              } else {
                                priorityDivClass = priorityDivClass.replace('block', 'hidden')
                                generalDivPriority.className = generalDivPriority.className.replace('border-[#7926ed]', '')
                                span.innerHTML = svg.CaretDownFill
                              }
                              priorityDiv.className = priorityDivClass
                            },
                            child: [
                              elementGenerator({
                                element: 'p',
                                className: 'ml-2 mt-2',
                                id: 'PriorityPTag',
                                child: 'priority'
                              }),
                              elementGenerator({
                                element: 'span',
                                id: 'prioritySpan',
                                className: 'mr-2 mt-2',
                                innerHTML: svg.CaretDownFill
                              }),
                              elementGenerator({
                                element: 'div',
                                className: 'hidden absolute min-w-max shadow-2xl bg-white rounded mt-1 w-44 mt-[10.5rem]',
                                id: 'priorityDiv',
                                child: priorityList.map(s => elementGenerator({
                                  element: 'a',
                                  onclick: (e) => {
                                    const priorityDiv = document.getElementById('priorityDiv')
                                    let priorityDivClassName = priorityDiv.className
                                    priorityDivClassName = priorityDivClassName.replace('block', 'hidden')
                                    const generalPriorityDiv = document.getElementById('generalDivPriority')
                                    generalPriorityDiv.className = generalPriorityDiv.className.replace('border-[#7926ed', '')
                                    priorityDiv.className = priorityDivClassName

                                    document.getElementById('PriorityPTag').innerHTML = e.target.innerHTML
                                    document.getElementById('prioritySpan').innerHTML = svg.CaretDownFill
                                  },
                                  className: 'block hover:cursor-pointer hover:bg-[#f5f5f2] p-1 active:bg-[#d9d5e6]',
                                  child: s
                                }))
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  elementGenerator({
                    element: 'div',
                    className: 'p-4 text-xl',
                    child: [
                      elementGenerator({
                        element: 'div',
                        className: 'relative inline-block border rounded w-44 h-12 hover:cursor-pointer',
                        id: 'generalDivStatus',
                        onmouseleave: (e) => {
                          const statusDiv = document.getElementById('statusDiv')
                          const span = e.target.querySelector('span')
                          const generalDivStatus = document.getElementById('generalDivStatus')
                          let statusDivClass = statusDiv.className
                          statusDivClass = statusDivClass.replace('block', 'hidden')
                          generalDivStatus.className = generalDivStatus.className.replace('border-[#7926ed]', '')
                          span.innerHTML = svg.CaretDownFill
                          statusDiv.className = statusDivClass
                          statusDiv.className = statusDivClass
                        },
                        child: [
                          elementGenerator({
                            element: 'div',
                            id: 'statusSelect',
                            className: 'z-0 flex justify-between items-center',
                            onclick: (e) => {
                              const statusDiv = document.getElementById('statusDiv')
                              const span = e.target.querySelector('span')
                              const generalDivStatus = document.getElementById('generalDivStatus')
                              let statusDivClass = statusDiv.className
                              if (statusDivClass.match('hidden')) {
                                statusDivClass = statusDivClass.replace('hidden', 'block')
                                span.innerHTML = svg.CaretUpFill
                                generalDivStatus.className = generalDivStatus.className + ' border-[#7926ed]'
                              } else {
                                statusDivClass = statusDivClass.replace('block', 'hidden')
                                generalDivStatus.className = generalDivStatus.className.replace('border-[#7926ed]', '')
                                span.innerHTML = svg.CaretDownFill
                              }
                              statusDiv.className = statusDivClass
                            },
                            child: [
                              elementGenerator({
                                element: 'p',
                                className: 'ml-2 mt-2',
                                id: 'statusPTag',
                                child: 'Status'
                              }),
                              elementGenerator({
                                element: 'span',
                                id: 'statusSpan',
                                className: 'mr-2 mt-2',
                                innerHTML: svg.CaretDownFill
                              }),
                              elementGenerator({
                                element: 'div',
                                className: 'hidden absolute min-w-max shadow-2xl bg-white rounded mt-1 w-44 mt-[10.5rem]',
                                id: 'statusDiv',
                                child: statusList.map(s => elementGenerator({
                                  element: 'a',
                                  onclick: (e) => {
                                    const statusDiv = document.getElementById('statusDiv')
                                    let statusDivClassName = statusDiv.className
                                    statusDivClassName = statusDivClassName.replace('block', 'hidden')
                                    const generalStatusDiv = document.getElementById('generalDivStatus')
                                    generalStatusDiv.className = generalStatusDiv.className.replace('border-[#7926ed', '')
                                    statusDiv.className = statusDivClassName

                                    document.getElementById('statusPTag').innerHTML = e.target.innerHTML
                                    document.getElementById('statusSpan').innerHTML = svg.CaretDownFill
                                  },
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
        ]
      })
    ]
  })
}

export default AddTask
