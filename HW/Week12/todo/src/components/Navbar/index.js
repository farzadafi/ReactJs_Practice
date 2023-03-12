import elementGenerator from '@/library/elementGenerator.js'
import { svg } from '@/assets/svgs/index.js'

const Navbar = () => {
  return (elementGenerator({
    element: 'div',
    className: 'flex p-2 bg-[#6200ea] justify-between',
    child: [
      elementGenerator({
        element: 'div',
        className: 'flex justify-center items-center gap-2 text-white text-2xl',
        child: 'My To Do Tasks',
        innerHTML: svg.listUlIcon
      }), elementGenerator({
        element: 'div',
        className: 'flex items-center gap-6 mr-4',
        child: [
          elementGenerator({
            element: 'label',
            for: 'searchInput',
            className: ''
          }),
          elementGenerator({
            element: 'input',
            id: 'searchInput',
            className: 'rounded-md p-1 bg-[#7926ed] font-[farzad]',
            placeholder: ' Search'
          }),
          elementGenerator({
            element: 'button',
            className: 'text-white',
            innerHTML: svg.filterIcon
          }),
          elementGenerator({
            element: 'button',
            className: 'text-white',
            innerHTML: svg.plusIcon,
            onclick: (e) => {
              e.stopPropagation()
              const addTaskModal = document.getElementById('addTaskModal')
              const container = document.getElementById('container')
              addTaskModal.className = addTaskModal.className.replace('hidden', 'absolute')
              container.className = container.className + ' bg-opacity-30 bg-black'
            }
          })
        ]
      })
    ]
  }))
}

export default Navbar
