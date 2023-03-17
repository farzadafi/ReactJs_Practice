import { Container } from '@/layout'
import { ElementGenerator } from '@/library'
import { Header } from '@/components'

const App = () => {
  const app = ElementGenerator({
    element: 'div',
    child: [Header()]
  })
  return Container(app)
}

export default App
