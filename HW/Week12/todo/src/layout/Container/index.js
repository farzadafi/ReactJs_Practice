import elementGenerator from '@/library/elementGenerator'

const Container = (child) => {
  return (elementGenerator({
    element: 'div',
    id: 'container',
    onclick: () => {
      const addTaskModal = document.getElementById('addTaskModal')
      const container = document.getElementById('container')
      addTaskModal.className = addTaskModal.className.replace('top-[20%]', 'top-[-90%]')
      container.className = container.className.replace('bg-opacity-30 bg-[black]', 'bg-white')
    },
    className: 'container mx-auto bg-white inset-0 fixed',
    child
  }))
}

export default Container
