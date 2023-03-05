import elementGenerator from '@/library/elementGenerator'

const Container = (child) => {
  // <div className=""></div>
  return (elementGenerator({
    element: 'div',
    className: 'container mx-auto bg-green-500',
    child
  }))
}

export default Container
