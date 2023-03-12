import elementGenerator from '@/library/elementGenerator'

const Container = (child) => {
  // <div className=""></div>
  return (elementGenerator({
    element: 'div',
    id: 'container',
    className: 'container mx-auto bg-white inset-0 fixed',
    child
  }))
}

export default Container
