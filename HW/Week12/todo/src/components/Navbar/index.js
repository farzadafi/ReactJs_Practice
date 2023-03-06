import elementGenerator from '@/library/elementGenerator.js'
import { svg } from '@/assets/svgs/index.js'

const Navbar = () => {
  // <div className=""></div>
  return (elementGenerator({
    element: 'div',
    className: 'flex p-2 bg-[#6200ea] justify-between',
    child: [
      elementGenerator({
        element: 'div',
        className: 'flex justify-center items-center gap-2 text-white',
        child: 'My To Do Tasks',
        innerHTML: svg.listUlIcon
      }), elementGenerator({
        element: 'div',
        className: 'flex items-center',
        child: [
          elementGenerator({
            element: 'button',
            className: 'text-white',
            innerHTML: svg.plusIcon
          })
        ]
      })
    ]
  }))
}

export default Navbar
