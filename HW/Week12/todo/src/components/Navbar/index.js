import elementGenerator from '@/library/elementGenerator.js'
import { svgs } from '@/assets/svgs/index.js'

const Navbar = () => {
  // <div className=""></div>
  return (elementGenerator({
    element: 'div',
    className: 'flex p-2 bg-[#6200ea]',
    child: [
      elementGenerator({
        element: 'div',
        className: 'flex justify-center items-center gap-2 text-white',
        child: 'My To Do Tasks',
        innerHTML: svgs.listUlIcon
      })
    ]
  }))
}

export default Navbar
