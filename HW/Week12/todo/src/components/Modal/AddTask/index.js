import elementGenerator from '@/library/elementGenerator.js'

const AddTask = () => {
  return elementGenerator({
    element: 'div',
    className: 'fixed w-5/12 h-3/5 bg-green-500 top-[20%] left-[30%] rounded-md',
    child: [
      elementGenerator({
        element: 'header',
        className: 'm-4 text-2xl',
        child: 'New Task'
      }),
      elementGenerator({
        element: 'hr',
        className: ''
      }),
      elementGenerator({
        element: 'fieldset',
        className: 'border m-4 h-16 rounded',
        child: elementGenerator({
          element: 'legend',
          className: 'ml-4 text-gray-100 p-1 flex flex-col',
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
      })
    ]
  })
}

export default AddTask