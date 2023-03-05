import Container from '@/layout/Container'
import elementGenerator from '@/library/elementGenerator'
import Navbar from "@/components/Navbar/index.js";

const App = () => {
  const app = elementGenerator({
    element: 'div',
    child: [Navbar(), ]
  })
  return Container(app)
}

export default App
