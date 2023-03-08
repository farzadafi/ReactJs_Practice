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
          className: 'ml-4 text-gray-100 p-1',
          child: 'Task Name'
        })
      })
    ]
  })
}

export default AddTask
