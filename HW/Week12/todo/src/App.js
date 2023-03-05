import Container from '@/layout/Container'
import elementGenerator from '@/library/elementGenerator'

const App = () => {
  const app = elementGenerator({
    element: 'div',
    child: []
  })
  return Container(app)
}

export default App
