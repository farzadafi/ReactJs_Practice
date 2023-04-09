import { ElementGenerator } from '@/library'

export const Container = (child) => {
  return (ElementGenerator({
    element: 'div',
    className: ' mx-auto bg-white grid justify-center dark:bg-gray-700',
    child
  }))
}
