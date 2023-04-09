import { Container } from '@/layout'
import { ElementGenerator } from '@/library'
import { LoadingPage } from '@/screens'

const App = () => {
  return ElementGenerator({
    element: 'div',
    child: [Container(LoadingPage())]
  })
}

export default App
