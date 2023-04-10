import { Container } from '@/layout'
import { ElementGenerator } from '@/library'
import { LoadingPage, WelcomePage } from '@/screens'

const App = () => {
  const app = ElementGenerator({
    element: 'div',
    child: [Container(LoadingPage())]
  })
  setTimeout(function () {
    const loading = app.childNodes[0]
    app.removeChild(loading)
    app.appendChild(WelcomePage())
  }, 3000)
  return app
}

export default App
