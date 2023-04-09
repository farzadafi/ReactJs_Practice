import { ElementGenerator } from '@/library/index.js'
import { WelcomePage, LoadingPage } from '@/screens/index.js'

export const Routes = () => {
  const routes = document.getElementById('routes') || ElementGenerator({ element: 'div' })
  routes.innerHTML = ''
  switch (location.pathname) {
    case '/' :
      return routes.appendChild(LoadingPage())
    case '/welcomePage' :
      return routes.appendChild(WelcomePage())
    default :
      return routes.innerHTML = 'gom shodi!'
  }
}
