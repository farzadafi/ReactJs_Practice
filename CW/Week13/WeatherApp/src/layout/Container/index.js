import { ElementGenerator } from '@/library'

export const Container = (child) => {
  return (ElementGenerator({
    element: 'div',
    className: ' mx-auto bg-gray-100 max-w-7xl',
    child
  }))
}
