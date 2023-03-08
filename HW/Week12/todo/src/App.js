import Container from '@/layout/Container'
import elementGenerator from '@/library/elementGenerator'
import Navbar from '@/components/Navbar/index.js'
import AddTask from '@/components/Modal/AddTask/index.js'

const App = () => {
  const app = elementGenerator({
    element: 'div',
    child: [Navbar(), AddTask()]
  })
  return Container(app)
}

export default App
