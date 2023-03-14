import elementGenerator from '@/library/elementGenerator.js'
import { svg } from '@/assets/svgs/index.js'
import { Button } from '@/components/Button/index.js'

const priorityList = ['Low', 'Medium', 'High']
const statusList = ['Todo', 'Doing', 'Done']

const AddTask = () => {
  return elementGenerator({
    element: 'div',
    id: 'addTaskModal',
    onclick: (e) => {
      e.stopPropagation()
      const p = document.getElementById('hiddenP')
      if (p.className.match('\\bvisible\\b')) {
        p.className = p.className + ' transition-all delay-75'
        p.className = p.className.replace('visible top-[4.8rem] text-sm text-purple-800', 'invisible top-[5.9rem] text-lg text-gray-500')
        const setPlaceholder = () => {
          const input = document.getElementById('taskName')
          input.placeholder = 'Task Name'
        }
        setTimeout(setPlaceholder, 230)
      }
    },
    className: 'absolute w-6/12 h-3/5 bg-white top-[-90%] left-[25%] rounded-md shadow-2xl',
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
            element: 'hr',
            className: 'border-gray-300'
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
                element: 'p',
                id: 'hiddenP',
                className: 'absolute invisible top-[5.9rem] text-lg text-gray-500 left-[1.4rem] bg-white w-22 p-1',
                child: 'Task Name'
              }),
              elementGenerator({
                element: 'label',
                for: 'taskName'
              }),
              elementGenerator({
                element: 'input',
                className: 'w-[45.8rem] ml-4 mr-8 rounded border mt-6 p-3 outline-none text-black focus-within:border-[#7926ed] focus-within:border-2 placeholder:text-lg',
                onclick: (e) => {
                  e.stopPropagation()
                  e.target.placeholder = ''
                  const p = document.getElementById('hiddenP')
                  p.className = p.className + ' transition-all delay-75'
                  p.className = p.className.replace('invisible top-[5.9rem] text-lg', 'visible top-[4.8rem] text-sm text-purple-800')
                },
                placeholder: 'Task Name',
                id: 'taskName'
              }), elementGenerator({
                element: 'div',
                className: 'flex gap-1 mt-10',
                child: [
                  elementGenerator({
                    element: 'div',
                    className: 'p-4 text-xl',
                    child: [
                      elementGenerator({
                        element: 'div',
                        className: 'relative inline-block border-gray-300 border rounded w-56 h-12 hover:cursor-pointer',
                        id: 'generalDivPriority',
                        onmouseleave: (e) => {
                          const priorityDiv = document.getElementById('priorityDiv')
                          const span = e.target.querySelector('span')
                          const generalDivPriority = document.getElementById('generalDivPriority')
                          let priorityDivClass = priorityDiv.className
                          priorityDivClass = priorityDivClass.replace('block', 'hidden')
                          generalDivPriority.className = generalDivPriority.className.replace('border-purple-600 border-2', '')
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
                                generalDivPriority.className = generalDivPriority.className + ' border-purple-600 border-2'
                              } else {
                                priorityDivClass = priorityDivClass.replace('block', 'hidden')
                                generalDivPriority.className = generalDivPriority.className.replace('border-purple-600 border-2', '')
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
                                className: 'hidden absolute min-w-max shadow-2xl bg-white rounded w-56 mt-[10.3rem]',
                                id: 'priorityDiv',
                                child: priorityList.map(s => elementGenerator({
                                  element: 'a',
                                  onclick: (e) => {
                                    const priorityDiv = document.getElementById('priorityDiv')
                                    let priorityDivClassName = priorityDiv.className
                                    priorityDivClassName = priorityDivClassName.replace('block', 'hidden')
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
                        className: 'relative inline-block border-gray-300 border rounded w-56 h-12 hover:cursor-pointer',
                        id: 'generalDivStatus',
                        onmouseleave: (e) => {
                          const statusDiv = document.getElementById('statusDiv')
                          const span = e.target.querySelector('span')
                          const generalDivStatus = document.getElementById('generalDivStatus')
                          let statusDivClass = statusDiv.className
                          statusDivClass = statusDivClass.replace('block', 'hidden')
                          span.innerHTML = svg.CaretDownFill
                          generalDivStatus.className = generalDivStatus.className.replace('border-purple-600 border-2', '')
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
                                generalDivStatus.className = generalDivStatus.className + ' border-purple-600 border-2'
                              } else {
                                statusDivClass = statusDivClass.replace('block', 'hidden')
                                generalDivStatus.className = generalDivStatus.className.replace('border-purple-600 border-2', '')
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
                                className: 'hidden absolute min-w-max shadow-2xl bg-white rounded w-56 mt-[10.3rem]',
                                id: 'statusDiv',
                                child: statusList.map(s => elementGenerator({
                                  element: 'a',
                                  onclick: (e) => {
                                    const statusDiv = document.getElementById('statusDiv')
                                    let statusDivClassName = statusDiv.className
                                    statusDivClassName = statusDivClassName.replace('block', 'hidden')
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
                  }),
                  elementGenerator({
                    element: 'label',
                    className: '',
                    for: 'calenderInput'
                  }),
                  elementGenerator({
                    element: 'input',
                    className: 'h-12 mt-4 rounded-md w-56 border-gray-300 border p-2  focus-within:border-[#7926ed] focus-within:border-2 outline-none',
                    type: 'datetime-local'
                  })
                ]
              }),
              elementGenerator({
                element: 'textarea',
                className: 'ml-4 rounded-md p-3 mt-10 border border-gray-300 focus-within:border-[#7926ed] focus-within:border-2 outline-none',
                placeholder: 'Details (optional)',
                rows: '6',
                cols: '77'
              })
            ]
          })
        ]
      }),
      elementGenerator({
        element: 'footer',
        className: '',
        child: [
          elementGenerator({
            element: 'hr',
            className: 'mt-8'
          }),
          elementGenerator({
            element: 'div',
            className: 'flex p-4 mt-1 justify-between',
            child: [
              Button({
                child: 'Cancel',
                onclick: () => {
                  const addTaskModal = document.getElementById('addTaskModal')
                  const container = document.getElementById('container')
                  addTaskModal.className = addTaskModal.className.replace('top-[20%]', 'top-[-90%]')
                  container.className = container.className.replace('bg-opacity-30 bg-gray-900', 'bg-white')
                },
                variant: 'outlined'
              }),
              Button({
                child: 'Save',
                variant: 'contained'
              })
            ]
          })
        ]
      })
    ]
  })
}

export default AddTask
