import elementGenerator from '@/library/elementGenerator.js'

const AddTask = () => {
  return elementGenerator({
    element: 'div',
    className: 'fixed w-5/12 h-3/5 bg-green-500 top-[20%] left-[30%] rounded-md',
    child: [
      elementGenerator({
        element: 'header',
        className: 'm-4',
        child: 'New Task'
      })
    ]
  })
}

export default AddTask
