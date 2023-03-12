import elementGenerator from '@/library/elementGenerator'

const Container = (child) => {
  // <div className=""></div>
  return (elementGenerator({
    element: 'div',
    id: 'container',
    className: 'container mx-auto bg-gray-100 inset-0 fixed',
    child
  }))
}

export default Container
